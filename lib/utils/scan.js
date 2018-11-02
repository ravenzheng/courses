/* eslint no-console: "off" */
const fs = require('fs-extra');
const scanStructure = require('../generate/scanStructure');

const sourceDir = '../phys208a';

function scan() {
  const course = scanStructure(sourceDir);
  fs.outputJsonSync('./course-sample.json', course);
}

if (require.main === module) {
  scan();
}

module.exports = scan;
