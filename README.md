[![Build Status](https://travis-ci.com/morewings/cra-template-npm-library.svg?branch=master)](https://travis-ci.com/morewings/cra-template-npm-library)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=morewings/cra-template-npm-library)](https://dependabot.com)
[![dependencies Status](https://david-dm.org/morewings/cra-template-npm-library/status.svg)](https://david-dm.org/morewings/cra-template-quickstart-redux)
[![yarn version](https://badge.fury.io/js/cra-template-npm-library.svg)](https://www.npmjs.com/package/cra-template-npm-library)
[![npm](https://img.shields.io/npm/dm/cra-template-npm-library)](https://www.npmjs.com/package/cra-template-npm-library)

# NPM library Create React App template

[Create React App](https://github.com/facebook/create-react-app) (CRA) template to build and publish NPM libraries with **rollup**, **eslint** and **stylelint** configurations.

Original Create React App README available [here](./README_CRA.md)

## Usage

```shell script
npx create-react-app %PROJECT_NAME% --template npm-library
``` 
Or
```shell script
yarn create react-app %PROJECT_NAME% --template npm-library
```

`npx` command installs most recent stable version of CRA from npm. `--template` parameter points to this template, note that `cra-template-` prefix is omitted.

Then

```shell script
cd %PROJECT_NAME%
node ./prepare.js # makes required package.json configuration
yarn start
```

## Git hooks

Git hooks management is provided by [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged). To enable git hooks you have to rename file `huskyrc-template` to `.huskyrc` in the root of project.

Another option is to extend `package.json` with: 

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "CI=true yarn test --passWithNoTests"
    }
  }
}
```

Thus every time you commit something `husky` will run `eslint --fix` command  on staged files, preventing you from committing badly formatted code. You can change or disable this behavior inside `.linstagedrc` config file. Before each push tests will run in the same manner. 

### Caveats

- If pre-commit hooks not work (e. g. your code is not linted after commit), run ``yarn add husky`` in your project folder.

- You need to [update snapshots](https://jestjs.io/docs/en/snapshot-testing#updating-snapshots) and fix failing tests to be able to commit or push your code.

## Testing

Snapshot testing done with [react-testing-library](https://testing-library.com/docs/react-testing-library/intro). Example tests are included. Redux connected components are tested with [redux-mock-store](https://github.com/dmitry-zaets/redux-mock-store) and [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter).

## Code quality tools

Code quality tools provide static check of your code and try to fix errors. Checks are triggered inside pre-commit hook. To run them manually:

```shell script
yarn lint:js # runs eslint in src directory
yarn fix:js # runs eslint in src directory with --fix parameter
yarn lint:style # runs stylelint in src directory
yarn fix:style # runs stylelint in src directory with --fix parameter
```

### eslint

Template extends [CRA eslint rules](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app) with custom set, tailored for reasonable and clean development process. I added `prettier` to force consistent formatting and `eslint-plugin-fp` to avoid accidental mutations. Don't like trailing semicolons? Feel free to [tweak prettier rules](https://prettier.io/docs/en/configuration.html) inside `.prettierrc` file to match your code style.

Eslint rules are commented for your convenience, feel free to tweak or remove them. No judgement.

```js
// Allow jsx tags inside .js files.
"react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
// Disable props spreading (<App {...props} />) warning.
"react/jsx-props-no-spreading": 0,
// Throw warning instead of error when using array index as a key.
"react/no-array-index-key": 1,
// Allow modules with named exports only.
"import/prefer-default-export": 0,
// Force {foo: 'bar'} object literal syntax.
"object-curly-spacing": ["error", "never"],
// Throw warning instead of error when function is not properly formatted. 
// Feel free to choose your favorite option https://eslint.org/docs/rules/arrow-body-style
"arrow-body-style": ["warn", "as-needed"],
// Make prettier code formatting suggestions more verbose.
"prettier/prettier": ["warn"],
// Throw warning when <a href="#"> or <a href="javascript:void(0)"> are used.
// Use <button> instead.
"jsx-a11y/anchor-is-valid": ["warn", {"aspects": ["invalidHref"]}],
// Allow using (props) => <Component /> and ({propName}) => <Component /> syntax.
"react/destructuring-assignment": "off",
// Disable <Fragment> => <> replacement. Feel free to change
"react/jsx-fragments": "off",
// Below is the set of functional rules to warn developer about accidental mutations, 
// which may cause error in reducers etc.
// No delete operator.
"fp/no-delete": "warn",
// Warning when Object.assign(a, b) used, since it mutates first argument.
// Object.assign({}, a, b) is ok.
"fp/no-mutating-assign": "warn",
// Warning when mutating method (pop, push, reverse, shift, sort, splice, unshift, etc) 
// is used. Ramda and lodash/fp are allowed (_.pop, R.push)
"fp/no-mutating-methods": [
  "warn",
  {
    "allowedObjects": ["_", "R"]
  }
],
// Warning when mutating operators (++, --, etc) are used, object = {} also. 
// `Component.propTypes`, `Component.defaultProps`, common.js (`module.exports`)
// and `ref.current` are ok.
"fp/no-mutation": [
  "warn",
  {
    "commonjs": true,
    "allowThis": true,
    "exceptions": [{"property": "propTypes"}, {"property": "defaultProps"}, {"property": "current"}]
  }
]
```

### stylelint

Template includes [stylelint](https://stylelint.io/), to check CSS/SASS/LESS files. We are using [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) rule set extended with:

```js
// Check `calc` functions formatting, required for `calc` to work in IE11
"function-calc-no-unspaced-operator": true,
// Custom rules (aka CSS vars) should go first
"order/order": [
  "custom-properties",
  "declarations"
],
// Require rules to be in alphabetical order
"order/properties-alphabetical-order": true,
// Disallow vendor prefixes, since CRA has autoprefixer enabled
"property-no-vendor-prefix": true,
"media-feature-name-no-vendor-prefix": true,
"at-rule-no-vendor-prefix": true,
"selector-no-vendor-prefix": true,
// Limit rules nesting for readablity purposes
"max-nesting-depth": 3,
// Limit selector complexity for readablity purposes
"selector-max-compound-selectors": 5
```
Stylelint errors don't prevent build of application in development mode.

## Absolute imports

You can use source folder relative paths for imports. `import Component from './../../../../../../src/components/Component'` becomes `import Component from 'components/Component'`. Configuration is inside `jsconfig.json` file. You will love it 💖!
