const rimraf = require('rimraf');

const {files, templateDir} = require('./templateFiles');

const cleanDir = () => {
  files.forEach(path => {
    try {
      rimraf.sync(`${templateDir}/${path}`);
    } catch (err) {
      console.error(err);
    }
  });
};

cleanDir();
