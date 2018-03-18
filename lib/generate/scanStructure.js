const fs = require('fs-extra');
const path = require('path');
const klawSync = require('klaw-sync');

module.exports = function scan(sourceDir) {
  // start from source/meta.json file. checkout meta.json for more info.
  const meta = fs.readJsonSync(path.join(sourceDir, 'meta.json'));
  const course = { shortName: meta.shortName, fullName: meta.fullName };
  const files = [];
  meta.categories.forEach((category) => {
    const subdir = path.join(sourceDir, category);
    klawSync(subdir, { nodir: true }).forEach((item) => {
      const extname = path.extname(item.path);
      if (extname !== '.md') {
        return;
      }
      const basename = path.basename(item.path, '.md');
      files.push({
        category,
        filepath: item.path,
        title: basename,
        link: `/${meta.shortName}/${category}/${basename}.html`,
        outputFilePath: `${meta.shortName}/${category}/${basename}.html`
      });
    });
  });
  course.files = files;
  return course;
};
