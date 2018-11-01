import PropTypes from 'prop-types';
import React from 'react';
import '../style.css';

import NoteBody from '../components/NoteBody';

const NotePage = (props) => {
  const noteData = props.note;
  const cssFiles = ['katex.min_0.9.0.css', 'github-markdown_2.10.0.css', 'combined.css'];
  const styleLinks = cssFiles.map(cssFile => (
    <link rel="stylesheet" href={`/${noteData.courseName}/assets/${cssFile}`} key={cssFile} />
  ));

  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <head>
        <title>{noteData.title}</title>
        {styleLinks}
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
