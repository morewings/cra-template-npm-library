const fs = require('fs');
const pkg = require('./package.json');

/**
 * Create new package.json as Object
 */
const newPackage = {
  ...pkg,
  private: false,
  scripts: {
    ...pkg.scripts,
    prepare: 'husky install',
  },
  peerDependencies: {
    react: '>=16.8.0',
    'react-dom': '>=16.8.0',
  },
};

/** Overwrite file 'package.json' with new one */
fs.writeFileSync('package.json', JSON.stringify(newPackage, null, 2));
/** Self clean */
fs.unlinkSync('prepare.js');
