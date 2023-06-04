// Source taken and modified from:
// https://github.com/indooorsman/esbuild-css-modules-plugin/blob/master/index.js

const path = require('path');
const fs = require('fs-extra');
const postcss = require('postcss');
const cssModules = require('postcss-modules');
const discardComments = require('postcss-discard-comments');
const util = require('util');
const tmp = require('tmp');
const crypto = require('crypto');
const hash = crypto.createHash('sha256');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const ensureDir = util.promisify(fs.ensureDir);
const pluginNamespace = 'esbuild-css-modules-plugin-namespace';

const buildCssModulesJS = async (cssFullPath, options) => {
  const { inject = true } = options;

  const css = await readFile(cssFullPath);

  let cssModulesJSON = {};
  const result = await postcss([
    // NOTE CSS 가져올 때 escape처리가 되어버려 하기 모듈 주석처리
    // cssModules({
    //   generateScopedName: '[local]',
    //   getJSON(cssSourceFile, json) {
    //     cssModulesJSON = { ...json };
    //     return cssModulesJSON;
    //   },
    // }),
    discardComments({ removeAll: true }),
  ]).process(css, {
    from: undefined,
    map: false,
  });

  const classNames = JSON.stringify(cssModulesJSON);
  hash.update(cssFullPath);
  const digest = hash.copy().digest('hex');
  return `
const digest = '${digest}';
const css = \`${JSON.stringify(result.css)}\`;
${
  inject &&
  `
(function() {
  if (!document.getElementById(digest)) {
    var ele = document.createElement('style');
    ele.id = digest;
    ele.textContent = css;
    document.head.appendChild(ele);
  }
})();
`
}
export default ${classNames};
export { css, digest };
  `;
};

exports.cssPlugin = (options = {}) => {
  return {
    name: 'esbuild-css-modules-plugin',
    setup(build) {
      const rootDir = process.cwd();
      const tmpDirPath = tmp.dirSync().name;
      const { outdir, bundle } = build.initialOptions;

      build.onResolve({ filter: /\.css$/, namespace: 'file' }, async (args) => {
        const sourceFullPath = path.resolve(args.resolveDir, args.path);
        const sourceExt = path.extname(sourceFullPath);
        const sourceBaseName = path.basename(sourceFullPath, sourceExt);
        const sourceDir = path.dirname(sourceFullPath);
        const sourceRelDir = path.relative(path.dirname(rootDir), sourceDir);

        const tmpDir = path.resolve(tmpDirPath, sourceRelDir);
        await ensureDir(tmpDir);
        const tmpFilePath = path.resolve(tmpDir, `${sourceBaseName}.css`);

        const jsContent = await buildCssModulesJS(sourceFullPath, options);

        await writeFile(`${tmpFilePath}.js`, jsContent);

        if (outdir && !bundle) {
          const isOutdirAbsolute = path.isAbsolute(outdir);
          const absoluteOutdir = isOutdirAbsolute ? outdir : path.resolve(args.resolveDir, outdir);
          const isEntryAbsolute = path.isAbsolute(args.path);
          const entryRelDir = isEntryAbsolute
            ? path.dirname(path.relative(args.resolveDir, args.path))
            : path.dirname(args.path);

          const targetSubpath =
            absoluteOutdir.indexOf(entryRelDir) === -1
              ? path.join(entryRelDir, `${sourceBaseName}.css.js`)
              : `${sourceBaseName}.css.js`;
          const target = path.resolve(outdir, targetSubpath);

          fs.ensureDirSync(path.dirname(target));
          fs.copyFileSync(`${tmpFilePath}.js`, target);
        }

        if (!bundle) {
          return { path: sourceFullPath, namespace: 'file' };
        }

        return {
          path: `${tmpFilePath}.js`,
          namespace: pluginNamespace,
          pluginData: {
            content: jsContent,
            resolveArgs: {
              path: args.path,
              importer: args.importer,
              namespace: args.namespace,
              resolveDir: args.resolveDir,
              kind: args.kind,
            },
          },
        };
      });

      build.onLoad({ filter: /\.css\.js$/, namespace: pluginNamespace }, (args) => {
        return { contents: args.pluginData.content, loader: 'js' };
      });
    },
  };
};
