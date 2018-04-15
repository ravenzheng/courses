import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import md2html from '../md2html';
import TagList from './TagList';

const NoteBody = (props) => {
  const md = md2html(props.note);
  const html = { __html: md.document };
  const tags = md.meta.tags ? md.meta.tags : [];
  return (
    <React.Fragment>
      <Header />
      <Main>
        <React.Fragment>
          <TagList tags={tags} />
          <article className="markdown-body" dangerouslySetInnerHTML={html} />
        </React.Fragment>
      </Main>
      <Footer />
    </React.Fragment>
  );
};

NoteBody.propTypes = {
  note: PropTypes.string.isRequired
};

export default NoteBody;
