const { join, resolve } = require('path');
const esbuild = require('esbuild');
const globby = require('globby');
const { esmPlugin } = require('./plugin.esm');
const { cssPlugin } = require('./plugin.css');
const { svgPlugin } = require('./plugin.svg');
const { move, rm } = require('fs-extra');

const color = (n, v) => `\x1b[${n}m${v}\x1b[0m`;

function getBuildCommonOptions() {
  return {
    entryPoints: ['src/index.ts'],
    minify: true,
    bundle: true,
    target: 'es2019',
    inject: [__dirname + '/react-shim.js'],
    external: ['react', 'react/jsx-runtime', 'react-dom', 'framer', 'framer-motion'],
    plugins: [svgPlugin()],
  };
}

async function getBuildFramerOptions() {
  const path = join(process.cwd(), 'src');
  const outDir = resolve(join(process.cwd(), 'dist/framer'));
  const entryPoints = await globby([`${path}/**/*.(t|j)s*`]);

  return {
    entryPoints,
    minify: true,
    bundle: true,
    format: 'esm',
    target: 'es2019',
    inject: [__dirname + '/react-shim.js'],
    external: ['react', 'react/jsx-runtime', 'react-dom', 'framer', 'framer-motion'],
    plugins: [svgPlugin(), cssPlugin({ inject: true }), esmPlugin],
    outdir: outDir,
  };
}

async function buildFramer() {
  const options = await getBuildFramerOptions();

  await esbuild.build(options);

  console.log(`Build framer done!`);
}

async function buildEsm() {
  const outDir = resolve(join(process.cwd(), 'dist/js'));
  const commonOptions = getBuildCommonOptions();

  await esbuild.build({
    ...commonOptions,
    format: 'esm',
    outExtension: { '.js': '.mjs' },
    outdir: outDir,
  });

  console.log(`Build esm done!`);
}

async function buildCjs() {
  const outDir = resolve(join(process.cwd(), 'dist/js'));
  const commonOptions = getBuildCommonOptions();

  await esbuild.build({
    ...commonOptions,
    format: 'cjs',
    outExtension: { '.js': '.cjs' },
    outdir: outDir,
  });

  console.log(`Build cjs done!`);
}

async function build() {
  await Promise.all([buildFramer(), buildCjs(), buildEsm()]);

  await rm(resolve(join(process.cwd(), 'style.css')));
  await move(resolve(join(process.cwd(), 'dist/js/index.css')), resolve(join(process.cwd(), 'style.css')));

  console.log(`Build done!`);
}

async function serve(path = defaultPath, port = 8000) {
  function onRequest(info) {
    const status = color(info.status.toString().startsWith('2') ? 32 : 31, info.status);
    const line = color(37, `${info.method} ${status} ${info.path} [${info.timeInMS}ms]`);
    console.log(line);
  }

  await esbuild.serve({ port, onRequest }, await getBuildFramerOptions());
  console.log(`Server listening at http://127.0.0.1:${port}`);
}

function main(command, option) {
  const path = resolve(join(process.cwd(), 'src'));

  if (command === 'serve') {
    serve(path, option && parseInt(option));
  }

  if (command === 'build') {
    build(path, option && resolve(join(process.cwd(), option)));
  }
}

let [a, b, command, option] = process.argv;

main(command, option);
