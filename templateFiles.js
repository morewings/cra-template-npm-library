module.exports = {
  husky: {
    config: '.huskyrc',
    template: 'huskyrc-template',
  },
  templateDir: './template',
  files: [
    '.env',
    '.eslintrc',
    '.lintstagedrc',
    '.nvmrc',
    '.prettierrc',
    '.stylelintrc',
    'babel.config.rollup.js',
    'jsconfig.json',
    'netlify.toml',
    'prepare.js',
    'README.md',
    'rollup.config.js',
    'public',
    'src',
  ],
};
