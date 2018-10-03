import MarkdownIt from 'markdown-it';
import markdownItMeta from 'markdown-it-meta';
import markdownItKatex from './markdown-it-katex';
import markdownItContainer from './markdown-it-container';
import markdownItPagebreak from './markdown-it-pagebreak';

const markdownIt = MarkdownIt({
  html: true,
  xhtmlOut: true,
  breaks: true, // Convert '\n' in paragraphs into <br>
  langPrefix: 'language-', // CSS language prefix for fenced blocks. Can be
  linkify: false, // Autoconvert URL-like text to links
  typographer: false,
  quotes: '“”‘’',
  highlight(/* str, lang */) {
    return '';
  }
});

const katexOptions = {
  throwOnError: true,
  macros: {
    '\\bi': '\\leftrightarrow',
    '\\Bi': '\\Leftrightarrow',
    '\\d': '\\displaystyle',
    '\\dint': '\\displaystyle \\int',
    '\\dlim': '\\lim\\limits',
    '\\ges': '\\geqslant',
    '\\les': '\\leqslant',
    '\\ihat': '\\hat{i}',
    '\\jhat': '\\hat{j}',
    '\\khat': '\\hat{k}',
    '\\la': '\\langle',
    '\\ra': '\\rangle',
    '\\lb': '\\lbrack',
    '\\rb': '\\rbrack',
    '\\lm': '\\lambda',
    '\\th': '\\theta',
    '\\To': '\\Rightarrow'
  }
};
markdownIt.use(markdownItMeta);
markdownIt.use(markdownItKatex, katexOptions);
markdownIt.use(markdownItContainer, 'Definition');
markdownIt.use(markdownItContainer, 'Example');
markdownIt.use(markdownItContainer, 'Solution');
markdownIt.use(markdownItContainer, 'Theorem');
markdownIt.use(markdownItPagebreak);

module.exports = function render(md) {
  const renderedDocument = markdownIt.render(md);
  const mdMeta = markdownIt.meta ? markdownIt.meta : {};
  return {
    document: renderedDocument,
    meta: mdMeta
  };
};
