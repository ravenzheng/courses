const fs = require('fs-extra');
const path = require('path');
const transform = require('./transform');

const CHAPTER_REGEX = /^(.+)_.+\$/;

module.exports = function scan(sourceDir) {
  // start from source/meta.json file. checkout meta.json for more info.
  const meta = fs.readJsonSync(path.join(sourceDir, 'meta.json'));
  const course = {
    shortName: meta.shortName,
    fullName: meta.fullName,
    index: `/${meta.shortName}/index.html`,
    chapters: scanNotesDir(meta.shortName, `${sourceDir}/notes`)
  };

  return course;
};

function scanNotesDir(courseName, notesDir) {
  const chapterDirs = fs.readdirSync(notesDir);
  const chapters = chapterDirs
    .filter((dirName) => {
      const fullpath = path.join(notesDir, dirName);
      return fs.lstatSync(fullpath).isDirectory();
    })
    .map((chapterDir) => {
      const fullpath = path.join(notesDir, chapterDir);
      return scanChapterDir(courseName, fullpath);
    });

  return chapters;
}

function scanChapterDir(courseName, chapterDir) {
  let chapter = {};
  const title = path.basename(chapterDir);
  chapter.title = transform(title);

  const match = CHAPTER_REGEX.exec(title);
  if (match) {
    console.log(match[1]);
  }

  let sections = [];
  const sectionFiles = fs.readdirSync(chapterDir);
  sectionFiles.forEach((filename) => {
    if (path.extname(filename) !== '.md')
      return;

    const basename = path.basename(filename, '.md');

    const section = {};
    section.courseName = courseName;
    section.filepath = path.join(chapterDir, filename);;
    section.title = transform(basename);
    section.link = `/${courseName}/${title}/${basename}.html`;
    section.outputFilePath = `${courseName}/${title}/${basename}.html`;

    sections.push(section);
  });

  chapter.sections = sections;

  return chapter;
}
