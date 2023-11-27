const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');
const typescript = require('@rollup/plugin-typescript');
const external = require('@yelo/rollup-node-external');
const {dts} = require('rollup-plugin-dts');

module.exports = [
  {
    input: './src/lib/index.ts',
    output: [
      {
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        file: './dist/index.cjs.js',
      },
      {
        format: 'esm',
        exports: 'named',
        sourcemap: true,
        file: './dist/index.esm.js',
      },
    ],
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    external: external(),
    plugins: [
      postcss({
        extract: 'style.css',
        inline: false,
        modules: true,
        plugins: [
          postcssPresetEnv({
            browsers: ['>0.2%', 'not dead', 'not op_mini all'],
            stage: 3,
          }),
          autoprefixer(),
        ],
      }),
      typescript({
        tsconfig: 'tsconfig.build.json',
      }),
    ],
  },
  {
    input: './src/lib/index.ts',
    output: [{file: 'dist/types.d.ts', format: 'es'}],
    plugins: [dts()],
  },
];
