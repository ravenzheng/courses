/* eslint no-console: "off" */
const fs = require('fs-extra');
const path = require('path');

const klawSync = require('klaw-sync');

const regex = /^### \d{1,2}\.\d{1,2} (.+)$/;
const filenameRegex = /^hw\d{4}\.md$/;

function validate(filename) {
  return filenameRegex.test(filename);
}

function rename() {
  klawSync('.', { nodir: true }).forEach((item) => {
    const originalFilepath = item.path;
    const dirname = path.dirname(originalFilepath);
    const filename = path.basename(originalFilepath);
    if (!validate(filename)) {
      return;
    }
    console.log(originalFilepath);
    const content = fs.readFileSync(originalFilepath, { encoding: 'utf8' });
    const lines = content.split('\n');
    const match = regex.exec(lines[0]);
    if (!match) {
      console.log(originalFilepath);
      return;
    }
    const basename = path.basename(filename, '.md');
    let newFilename = `${match[1].replace(/\s/g, '_')}.md`;
    newFilename = newFilename.replace(/'/, '');
    newFilename = `${basename}_${newFilename}`;
    newFilename = newFilename.toLowerCase();
    const newFilepath = path.join(dirname, newFilename);
    console.log('newFilepath', newFilepath);

    lines[1] = lines[1].replace(/pg\.?\s+/, 'pg');
    lines[1] = lines[1].replace(/\s+/, ' ');
    const newContent = lines.join('\n');
    fs.outputFileSync(newFilepath, newContent);
    fs.unlinkSync(originalFilepath);
  });
}

rename();
