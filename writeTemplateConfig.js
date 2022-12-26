const fs = require('fs');
const pkg = require('./package.json');

const excludedPackages = ['react', 'react-dom', 'react-scripts'];

const excludedScripts = [
  'clean:files',
  'copy:files',
  'prepublishOnly',
  'write:template',
  'build:lib:local',
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
  },
  excludedPackages
);

const scripts = cleanConfig({...pkg.scripts}, excludedScripts);

const template = {
  package: {
    main: 'lib/index.cjs.js',
    module: 'lib/index.esm.js',
    style: 'lib/default.css',
    files: ['lib'],
    engines: {
      node: '>=14',
    },
    private: false,
    scripts: {
      ...scripts,
      prepare: 'node ./prepare.js && husky install',
    },
    dependencies,
    devDependencies: pkg.devDependencies,
    peerDependencies: {
      react: '>=16.8.0',
      'react-dom': '>=16.8.0',
    },
  },
};

fs.writeFileSync('template.json', JSON.stringify(template, null, 2));
