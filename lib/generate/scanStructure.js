const fs = require('fs-extra');
const path = require('path');
const transform = require('./transform');

const CHAPTER_REGEX = /^(\d{2}_.+)\.md$/;
const SECTION_REGEX = /^(\d{2})\d{2}.+/;

module.exports = function scan(sourceDir) {
  // start from source/meta.json file. checkout meta.json for more info.
  const meta = fs.readJsonSync(path.join(sourceDir, 'meta.json'));
  const course = {
    shortName: meta.shortName,
    fullName: meta.fullName,
    index: `/${meta.shortName}/index.html`,
    chapters: scanNotesDir(meta.shortName, sourceDir + '/notes')
  };

  return course;
};

function scanNotesDir(courseName, notesDir) {
  let chapterDirs = fs.readdirSync(notesDir);
  let chapters = chapterDirs.filter((dirName) => {
    let fullpath = path.join(notesDir, dirName);
    return fs.lstatSync(fullpath).isDirectory();
  }).map((chapterDir) => {
    let fullpath = path.join(notesDir, chapterDir);
    return scanChapterDir(courseName, fullpath);
  });

  return chapters;
}

function scanChapterDir(courseName, chapterDir) {
  let chapter = {};
  let chapterNum = path.basename(chapterDir);
  chapter.chapterNum = chapterNum;

  let sections = [];
  let sectionFiles = fs.readdirSync(chapterDir);
  sectionFiles.forEach((filename) => {
    if (path.extname(filename) !== '.md')
      return;

    let fullpath = path.join(chapterDir, filename);
    let basename = path.basename(filename, '.md');

    let match = CHAPTER_REGEX.exec(filename);
    if (match) {
      chapter.courseName = courseName;
      chapter.filepath = fullpath;
      chapter.title = transform(basename);
      chapter.link = `/${courseName}/${chapterNum}/${basename}.html`,
      chapter.outputFilePath= `${courseName}/${chapterNum}/${basename}.html`;
    } else {
      let section = {};
      section.courseName = courseName;
      section.filepath = fullpath;
      section.title = transform(basename);
      section.link = `/${courseName}/${chapterNum}/${basename}.html`;
      section.outputFilePath = `${courseName}/${chapterNum}/${basename}.html`;
      sections.push(section);
    }
  });

  chapter.sections = sections;

  return chapter;
}
