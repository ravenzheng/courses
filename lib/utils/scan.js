/* eslint no-console: "off" */
const fs = require('fs-extra');
const scanStructure = require('../generate/scanStructure');

const sourceDir = '../phys208a';

function scan() {
  const course = scanStructure(sourceDir);
  const courseStructure = {
    shortName: course.shortName,
    fullName: course.fullName,
    toc: course.toc,
    homework: [],
    misc: [],
    notes: [],
    topics: []
  };
  course.files.forEach((item) => {
    if (!courseStructure[item.category]) {
      courseStructure[item.category] = [];
    }
    courseStructure[item.category].push({
      name: item.name,
      link: item.link
    });
  });
  fs.outputJsonSync('./course-sample.json', courseStructure);
}

if (require.main === module) {
  scan();
}

module.exports = scan;
