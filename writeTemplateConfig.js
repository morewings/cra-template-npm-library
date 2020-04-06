const fs = require('fs');
const pkg = require('./package.json');

const excludedPackages = ['react', 'react-dom', 'react-scripts'];

const excludedScripts = [
  'clean:files',
  'copy:files',
  'prepublishOnly',
  'write:template',
];

const cleanConfig = (items, excluded) => {
  const result = {...items};
  excluded.forEach(name => {
    delete result[name];
  });
  return result;
};

const dependencies = cleanConfig(
  {
    ...pkg.dependencies,
    ...pkg.devDependencies,
  },
  excludedPackages
);

const scripts = cleanConfig({...pkg.scripts}, excludedScripts);

const template = {
  package: {
    main: 'lib/index.cjs.js',
    module: 'lib/index.esm.js',
    style: 'lib/default.css',
    dependencies,
    scripts,
  },
};

fs.writeFileSync('template.json', JSON.stringify(template, null, 2));
