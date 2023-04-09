[![Node.js CI](https://github.com/morewings/cra-template-npm-library/actions/workflows/merge-jobs.yml/badge.svg)](https://github.com/morewings/cra-template-npm-library/actions/workflows/merge-jobs.yml)
[![npm version](https://badge.fury.io/js/cra-template-npm-library.svg)](https://www.npmjs.com/package/cra-template-npm-library)
[![npm](https://img.shields.io/npm/dm/cra-template-npm-library)](http://npm-stats.org/#/cra-template-npm-library)

# NPM library Create React App template

[Create React App](https://github.com/facebook/create-react-app) (CRA) template to build and publish NPM libraries with **rollup**, **eslint** and **stylelint** configurations. See [full documentation](https://morewings.github.io/cra-template-npm-library).

## Usage

```shell script
npx create-react-app %PROJECT_NAME% --template npm-library
``` 
Or
```shell script
yarn create react-app %PROJECT_NAME% --template npm-library
```

Then

```shell script
cd %PROJECT_NAME%
yarn start
```

## Features

- Handles all modern JS features.
- Bundles `commonjs` and `es` module formats.
- [Husky](https://github.com/typicode/husky) for git hooks.
- [Eslint](https://eslint.org/) and [stylelint](https://stylelint.io/).
- [Rollup](https://rollupjs.org/guide/en/) for bundling.
- [Babel](https://babeljs.io/) for transpiling.
- [Jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) for testing.
- Supports CSS modules, SASS/SCSS and PostCSS.
- [Storybook](https://storybook.js.org/) for documentation and demo.
- And [much more](https://cra-template-npm-library.netlify.com/).

## Contributors

@morewings, @sky0matic
