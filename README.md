[![Node.js CI](https://github.com/morewings/cra-template-npm-library/actions/workflows/merge-jobs.yml/badge.svg)](https://github.com/morewings/cra-template-npm-library/actions/workflows/merge-jobs.yml)
[![types included](https://img.shields.io/github/package-json/types/morewings/cra-template-npm-library)](https://github.com/morewings/cra-template-npm-library)
[![npm version](https://badge.fury.io/js/cra-template-npm-library.svg)](https://www.npmjs.com/package/cra-template-npm-library)
[![npm](https://img.shields.io/npm/dm/cra-template-npm-library)](http://npm-stats.org/#/cra-template-npm-library)

# NPM library Create React App template

[![NPM library Create React App template logo](./design/banner.png)](#)


[Create React App](https://github.com/facebook/create-react-app) (CRA) template to build and publish NPM libraries with **rollup**, **eslint** and **stylelint** configurations.

🎁👌🤓 **NEW!** Now with **Typescript** support.

Read [full documentation](https://github.com/morewings/cra-template-npm-library/wiki).

Visit [Demo Storybook](https://morewings.github.io/cra-template-npm-library).

## Features

- Supports **Typescript** and **Javascript**.
- Bundles `commonjs` and `es` module formats.
- [Husky](https://github.com/typicode/husky) for git hooks.
- [Eslint](https://eslint.org/) and [stylelint](https://stylelint.io/).
- [Rollup](https://rollupjs.org/guide/en/) for bundling.
- [Jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) for testing.
- Supports CSS modules, SASS/SCSS and PostCSS.
- [Storybook](https://storybook.js.org/) for documentation and demo.
- And [much more](https://github.com/morewings/cra-template-npm-library/wiki).

## Quickstart

```shell script
npx create-react-app %PROJECT_NAME% --template npm-library
yarn create react-app %PROJECT_NAME% --template npm-library
pnpm create react-app %PROJECT_NAME% --template npm-library
```

Then

```shell script
cd %PROJECT_NAME%
npm run prepare
yarn run prepare
pnpm run prepare
```
