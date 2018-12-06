const CONNECTIVES = ['and', 'at', 'by', 'of', 'to', 'with', 'CIS'];

// from 01_chapter1.html to 01 Chapter1
module.exports = function transform(str) {
  let fragments = str.split('_');
  fragments = fragments.map((fragment) => {
    if (CONNECTIVES.includes(fragment)) {
      return fragment;
    }
    return fragment.charAt(0).toUpperCase() + fragment.slice(1);
  });
  return fragments.join(' ');
};
