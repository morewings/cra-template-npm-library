module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../docs/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    /**
     * TODO: disabled until they fix prettier bug
     * @example
     * ERROR in Error while loading rule 'prettier/prettier': context.getPhysicalFilename is not a function Occurred while linting /Users/dima/Dev/npm-test/src/lib/Counter/Counter.js
     *
     */
    // "@storybook/preset-create-react-app"
  ]
}
