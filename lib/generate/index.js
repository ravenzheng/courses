/* eslint no-console: "off" */
import fs from 'fs-extra';
import scanStructure from './scanStructure';
import renderWithReact from './renderWithReact';
import CoursePage from '../pages/CoursePage';
import NotePage from '../pages/NotePage';

function generateSectionPage(section) {
  const mdContent = fs.readFileSync(section.filepath, { encoding: 'utf8' });
  const noteData = {
    courseName: section.courseName,
    title: section.title,
    content: mdContent
  };
  const props = {
    note: noteData
  };
  return renderWithReact(NotePage, props);
}

function generateCoursePage(course) {
  const props = {
    course
  };
  return renderWithReact(CoursePage, props);
}

module.exports = function render() {
  const sourceDir = process.cwd();
  const course = scanStructure(sourceDir);

  const contentMap = {};

  contentMap[course.index] = generateCoursePage(course);
  course.chapters.forEach((chapter) => {
    chapter.sections.forEach((section) => {
      contentMap[section.outputFilePath] = generateSectionPage(section);
    });
  });

  return contentMap;
};
