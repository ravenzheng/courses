import React from 'react';
import moment from 'moment';

import md2html from '../md2html';

import './Footer.css';

let footNote =
  'Content written with attitude by @raven. [Contact me](../) \n Page built with [markdown-it](https://github.com/markdown-it/markdown-it), [Katex](https://khan.github.io/KaTeX/), [React](https://reactjs.org/) and [webpack](https://webpack.js.org/). \n';
footNote += `Updated at ${moment().format('lll')}`;

const htmlMarkup = { __html: md2html(footNote).document };

const Footer = () => (
  <footer className="note-footer">
    <div dangerouslySetInnerHTML={htmlMarkup} />
  </footer>
);

export default Footer;
