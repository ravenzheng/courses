/* eslint no-console: "off" */
const fs = require('fs-extra');
const scanStructure = require('../generate/scanStructure');

const sourceDir = '../phys208b';

function scan() {
  const course = scanStructure(sourceDir);
  fs.outputJsonSync('./course-sample1.json', course);
}

if (require.main === module) {
  scan();
}

module.exports = scan;
