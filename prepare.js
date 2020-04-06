const fs = require('fs');
const pkg = require('./package.json');

const newPackage = {
  ...pkg,
  files: ['lib'],
  engines: {
    node: '>=10',
  },
  private: false,
};

fs.writeFileSync('package.json', JSON.stringify(newPackage, null, 2));
