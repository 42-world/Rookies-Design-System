const { extname, resolve } = require('path');
const { existsSync } = require('fs');

exports.esmPlugin = {
  name: 'esm',
  setup(build) {
    build.onResolve({ filter: /.*/ }, (args) => {
      const hasExtension = extname(args.path);
      const isNode = args.importer.includes('node_modules');
      const isLocal = args.path.startsWith('./') || args.path.startsWith('../');
      const isExistFolder = existsSync(resolve(args.resolveDir, args.path));

      // Rewrite all imports that don't have an extension (we assume it's code)
      if (
        args.importer &&
        // This should not be a local node_modules import
        !isNode &&
        // This should be a local path (starting with ./ or ../)
        isLocal &&
        // This should be an import without an extension ("./file")
        !hasExtension
      ) {
        // Rewrite the imports to include the extension and make external to avoid bundling
        return { path: !isExistFolder ? `${args.path}.js` : `${args.path}/index.js`, external: true };
      }
    });
  },
};
