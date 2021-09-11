export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Docs',
        ['Intro', 'Install', 'Develop', 'Publish', 'Linters', 'Testing', 'Style options', 'Add documentation'],
        'Example',
      ],
    },
  },
};
