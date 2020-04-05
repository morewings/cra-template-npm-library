import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import includePaths from 'rollup-plugin-includepaths';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcssPresetEnv from 'postcss-preset-env';
import babel from 'rollup-plugin-babel';
import {eslint} from 'rollup-plugin-eslint';
import pkg from './package.json';

const POSTCSS_PLUGINS = [
  postcssPresetEnv({
    browsers: pkg.browserslist.development,
    stage: 3,
  }),
];

const config = {
  input: 'lib/index.js',
  output: {
    file: `src/npm-library.js`,
    format: 'es',
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
    eslint({
      throwOnError: true,
      exclude: ['**/*.css'],
    }),
    postcss({
      extract: false,
      inline: true,
      plugins: POSTCSS_PLUGINS,
    }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
  ],
};

export default config;
