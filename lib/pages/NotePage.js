import PropTypes from 'prop-types';
import React from 'react';
import '../style.css';

import NoteBody from '../components/NoteBody';

const NotePage = (props) => {
  const noteData = props.note;
  const cssFile = `/${noteData.courseName}/combined.css`;
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <head>
        <title>{noteData.title}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
          integrity="sha384-TEMocfGvRuD1rIAacqrknm5BQZ7W7uWitoih+jMNFXQIbNl16bO8OZmylH/Vi/Ei"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.css"
        />
        <link href={cssFile} rel="stylesheet" />
      </head>
      <body>
        <NoteBody note={noteData.content} />
      </body>
    </html>
  );
};

NotePage.propTypes = {
  note: PropTypes.shape({
    courseName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
};

export default NotePage;
