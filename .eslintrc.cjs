module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:ssr-friendly/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['import', 'prettier', '@typescript-eslint', 'ssr-friendly'],
  rules: {
    /**
     * Allow empty arrow functions `() => {}`, while keeping other empty functions restricted
     * @see https://eslint.org/docs/latest/rules/no-empty-function#allow-arrowfunctions
     */
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
    '@typescript-eslint/ban-ts-comment': 1,
    'no-const-assign': 'error',
    /** Restrict imports from devDependencies since they are not included in library build. peerDependencies are ok */
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        peerDependencies: true
      }
    ],
    /**
     * Enforce import order with empty lines between import group
     * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
     */
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index']
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal'
          }
        ],
        'newlines-between': 'always'
      }
    ],
    /**
     * Disallow combined module and type imports like this `import React, {FC} from 'react'`.
     * Eslint will try to split into type and module imports instead
     * @see https://typescript-eslint.io/rules/consistent-type-imports/
     */
    '@typescript-eslint/consistent-type-imports': 'error',
    'import/no-cycle': 'error',
    'prettier/prettier': ['error', {
      "semi": true,
      "singleQuote": true,
      "jsxSingleQuote": false,
      "trailingComma": "es5",
      "bracketSpacing": false,
      "jsxBracketSameLine": true,
      "arrowParens": "avoid"
    }]
  },
  overrides: [
    {
      /* Allow devDependencies imports for tests and config files */
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      },
    },
    {
      /* Allow devDependencies imports for tests and config files */
      files: ['**/*.spec.*', '**/testUtils/*.*', '**/*.js', '**/setupTests.ts'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
            peerDependencies: true,
          },
        ],
      },
    },
  ],
};
// @typescript-eslint/no-var-requires
