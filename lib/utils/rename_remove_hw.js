/* eslint no-console: "off" */
const fs = require('fs');
const path = require('path');

function rename() {
  const dirPath = './sections';
  const list = fs.readdirSync(dirPath);
  for(let oldName of list) {
    console.log(oldName);
    const newName = oldName.slice(2);
    const originalPath = path.join(dirPath, oldName);
    const newPath = path.join(dirPath, newName);
    console.log(originalPath);
    console.log(newPath);
    fs.renameSync(originalPath, newPath);
  }
}

rename();
