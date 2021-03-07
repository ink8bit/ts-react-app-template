import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import strip from '@rollup/plugin-strip';
import html, { makeHtmlAttributes } from '@rollup/plugin-html';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import sizes from 'rollup-plugin-sizes';

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const terserConfig = {
  ecma: 2018,
  format: {
    comments: false,
  },
};

const stripConfig = {
  include: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
  functions: ['console.*'],
  exclude: ['node_modules'],
};

function htmlTemplate({ attributes, files, publicPath, meta, title }) {
  const scripts = (files.js || [])
    .map(({ fileName }) => {
      const attrs = makeHtmlAttributes(attributes.script);
      return `<script src="${publicPath}${fileName}"${attrs}></script>`;
    })
    .join('\n');

  const links = (files.css || [])
    .map(({ fileName }) => {
      const attrs = makeHtmlAttributes(attributes.link);
      return `<link href="${publicPath}${fileName}" rel="stylesheet"${attrs}>`;
    })
    .join('\n');

  const metas = meta
    .map((input) => {
      const attrs = makeHtmlAttributes(input);
      return `<meta${attrs}>`;
    })
    .join('\n');

  return `
<!DOCTYPE html>
<html ${makeHtmlAttributes(attributes.html)}>
  <head>
    ${metas}
    <title>${title}</title>
    ${links}
  </head>
  <body>
    <div id="root">Rendering...</div>
    ${scripts}
  </body>
</html>
`;
}

export default {
  input: 'src/components/App/index.tsx',

  output: {
    file: isProd ? `build/bundle_${Date.now().toString()}.js` : 'build/bundle.js',
    format: 'iife',
    name: 'app',
    sourcemap: isProd ? false : 'inline',
  },

  plugins: [
    isProd && strip(stripConfig),

    replace({
      'process.env.NODE_ENV': isProd ? JSON.stringify('production') : JSON.stringify('development'),
      preventAssignment: true,
    }),

    typescript({ sourceMap: isDev }),

    babel({ babelHelpers: 'bundled', compact: true }),

    postcss({
      plugins: [cssnano()],
      extensions: ['.css'],
      autoModules: false,
      sourceMap: isProd ? false : 'inline',
      minimize: isProd,
      modules: {
        generateScopedName: isProd ? '[hash:base64]' : '[path][name]_[local]_[hash:base64:5]',
      },
    }),

    commonjs({ extensions: ['.js', '.ts', '.jsx', '.tsx'] }),

    nodeResolve({ browser: true }),

    image(),

    isProd && sizeSnapshot(),

    isProd && terser(terserConfig),

    html({
      title: 'React app',
      template: htmlTemplate,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ],
    }),

    // Run local web server to serve files when not in production
    isDev && serve({ contentBase: 'build', port: 3000 }),

    // Watch the `build` directory and refresh the
    // browser on changes when not in production
    isDev && livereload(),

    isProd && sizes({ details: true }),
  ],
};
