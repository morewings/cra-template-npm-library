import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import includePaths from 'rollup-plugin-includepaths';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import autoprefixer from 'autoprefixer';
import stylelint from 'rollup-plugin-stylelint';
import postcssPresetEnv from 'postcss-preset-env';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';

const outputs = [
  {
    file: pkg.main,
    format: 'umd',
  },
  {
    file: pkg.module,
    format: 'es',
  },
];

const postcssPlugins = [
  postcssPresetEnv({
    browsers: pkg.browserslist.production,
    stage: 3,
  }),
  autoprefixer(),
];

const config = outputs.map(({file, format}) => ({
  input: 'src/lib/index.js',
  output: {
    file,
    format,
    name: 'ReactCalendarToolkit',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    exports: 'named',
  },
  plugins: [
    peerDepsExternal(),
    includePaths({
      include: {},
      paths: ['src'],
      external: Object.keys(pkg.dependencies),
      extensions: ['.js', '.json', '.html'],
    }),
    stylelint({
      throwOnError: true,
    }),
    postcss({
      extract: pkg.style,
      inline: false,
      plugins: postcssPlugins,
    }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
    terser(),
    filesize(),
  ],
}));

export default config;
