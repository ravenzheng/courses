/* eslint no-console: "off" */
const fs = require('fs-extra');
const path = require('path');

const sourceDir = '../phys208b';

function rename() {
  const notesDir = `${sourceDir}/notes`;
  const chapterDirs = fs.readdirSync(notesDir);
  chapterDirs.forEach((chapterDir) => {
    const chapterDirFullPath = path.join(notesDir, chapterDir);
    const sectionFiles = fs.readdirSync(chapterDirFullPath);
    sectionFiles.forEach((sectionFile) => {
      const oldPath = path.join(chapterDirFullPath, `${chapterDir}.md`);
      const newPath = path.join(chapterDirFullPath, 'learning_objectives.md');
      console.log(oldPath);
      console.log(newPath);
      if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
      }
    });
  });
}

rename();
