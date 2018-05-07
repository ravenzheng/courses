const CHAPTER_REGEX = /(\d{2}).+/;
const SECTION_REGEX = /(\d{2})\d{2}.+/;

module.exports = function extractToc(files) {
  const chapters = {};
  const sections = {};
  files.forEach((item) => {
    let match;
    let chapterNum;
    if (item.category === 'notes') {
      match = CHAPTER_REGEX.exec(item.name);
      if (match) {
        chapters[match[1]] = item;
      }
    } else if (item.category === 'sections') {
      match = SECTION_REGEX.exec(item.name);
      if (match) {
        chapterNum = match[1];
        if (!sections[chapterNum]) {
          sections[chapterNum] = [];
        }
        sections[chapterNum].push(item);
      }
    }
  });
  const toc = [];
  Object.keys(chapters).forEach((key) => {
    const chapterNum = parseInt(key, 10);
    toc[chapterNum] = {
      chapterNum,
      chapter: chapters[key],
      sections: sections[key] || []
    };
  });
  const filtered = toc.filter(element => element != null);
  return filtered;
};
