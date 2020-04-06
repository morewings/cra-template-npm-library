const fs = require('fs');
const pkg = require('./package.json');

const newPackage = {
  ...pkg,
  peerDependencies: {
    react: '>=16.8.0',
    'react-dom': '>=16.8.0',
  },
  files: ['lib'],
  engines: {
    node: '>=10',
  },
  private: false,
};

fs.writeFileSync('package.json', JSON.stringify(newPackage, null, 2));
