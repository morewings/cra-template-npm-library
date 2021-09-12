const fs = require('fs');
const {spawn} = require('child_process');
const pkg = require('./package.json');

/**
 * Create new package.json as Object
 */
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

/**
 * Delete yarn.lock and reinstall dependencies to fix build errors
 * TODO: check if it's required
 */
fs.unlinkSync('yarn.lock');
const ls = spawn('yarn');

ls.stdout.on('data', data => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', data => {
  console.log(`stderr: ${data}`);
});

ls.on('error', error => {
  console.log(`error: ${error.message}`);
});

ls.on('close', code => {
  console.log(`yarn install exited with code ${code}`);
});

/** Overwrite file 'package.json' with new one */
fs.writeFileSync('package.json', JSON.stringify(newPackage, null, 2));
/** Self clean */
fs.unlinkSync('prepare.js');
