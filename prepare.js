const fs = require('fs');
const pkg = require('./package.json');

const newPackage = {
  ...pkg,
  scripts: {
    ...pkg.scripts,
    prepare: 'husky install',
  },
  peerDependencies: {
    react: '>=16.8.0',
    'react-dom': '>=16.8.0',
  },
  private: false,
};

fs.writeFileSync('package.json', JSON.stringify(newPackage, null, 2));
fs.unlinkSync('prepare.js');
