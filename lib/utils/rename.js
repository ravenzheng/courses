/* eslint no-console: "off" */
const fs = require('fs-extra');
const path = require('path');

const sourceDir = '../pols202';

function rename() {
  const notesDir = `${sourceDir}/notes`;
  const chapterDirs = fs.readdirSync(notesDir);
  chapterDirs.forEach((chapterDir) => {
    const chapterDirFullPath = path.join(notesDir, chapterDir);
    const fragments = chapterDir.split('_');
    fragments.splice(0, 1);

    const oldPath = chapterDirFullPath;
    const newPath = path.join(notesDir, fragments.join('_'));
    console.log(oldPath);
    console.log(newPath);
    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
    }
  });
}

rename();
