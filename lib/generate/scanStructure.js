const fs = require('fs-extra');
const path = require('path');
const transform = require('./transform');


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
      const isDirectory = fs.lstatSync(fullpath).isDirectory();
      const notAssets = dirName !== 'assets';
      return isDirectory && notAssets;
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

  const fragments = title.split('_');
  const chapterNum = fragments[0];

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
    section.link = `/${courseName}/${chapterNum}/${basename}.html`;
    section.outputFilePath = `${courseName}/${chapterNum}/${basename}.html`;

    sections.push(section);
  });

  chapter.sections = sections;

  return chapter;
}
