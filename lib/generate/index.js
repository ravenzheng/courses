/* eslint no-console: "off" */
import fs from 'fs-extra';
import scanStructure from './scanStructure';
import renderWithReact from './renderWithReact';
import CoursePage from '../pages/CoursePage';
import NotePage from '../pages/NotePage';

function generateNotePage(courseName, item) {
  const mdContent = fs.readFileSync(item.filepath, { encoding: 'utf8' });
  const noteData = {
    courseName,
    title: item.name,
    content: mdContent
  };
  const props = {
    note: noteData
  };
  return renderWithReact(NotePage, props);
}

function generateCoursePage(course) {
  const courseStructure = {
    shortName: course.shortName,
    fullName: course.fullName,
    homework: [],
    misc: [],
    notes: [],
    sections: [],
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
  const props = {
    course: courseStructure
  };
  return renderWithReact(CoursePage, props);
}

module.exports = function render() {
  const sourceDir = process.cwd();
  const contentMap = {};
  const course = scanStructure(sourceDir);
  const courseName = course.shortName;
  course.files.forEach((item) => {
    contentMap[item.outputFilePath] = generateNotePage(courseName, item);
  });
  contentMap[`/${courseName}/index.html`] = generateCoursePage(course);
  return contentMap;
};
