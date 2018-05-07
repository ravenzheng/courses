import React from 'react';
import PropTypes from 'prop-types';

import './CourseBody.css';

const ChapterItem = (props) => {
  const chapter = props.data.chapter;
  const sections = props.data.sections;
  return (
    <li className="chapter-list-item">
      <a href={chapter.link}>{chapter.name}</a>
      <SectionList sections={sections} />
    </li>
  );
};
ChapterItem.propTypes = {
  data: PropTypes.shape({
    chapter: PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string
    }).isRequired,
    sections: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string
    })).isRequired
  }).isRequired
};

const SectionList = (props) => {
  const listItems = props.sections.map(note => <SectionListItem key={note.name} section={note} />);
  if (listItems.length === 0) {
    return '';
  }
  return (
    <ul className="section-list">{listItems}</ul>
  );
};

SectionList.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string
  })).isRequired
};

const SectionListItem = (props) => {
  const section = props.section;
  return (
    <li className="section-list-item">
      <a href={section.link}>{section.name}</a>
    </li>
  );
};
SectionListItem.propTypes = {
  section: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string
  }).isRequired
};

const Toc = (props) => {
  const toc = props.toc;
  const chapters = toc.map(element =>
    (<ChapterItem data={element} key={element.chapterNum} />));
  return (
    <section className="toc-section">
      <h2 className="toc-head">Table of Content</h2>
      <ul className="chapter-list">{chapters}</ul>
    </section>
  );
};

Toc.propTypes = {
  toc: PropTypes.array.isRequired
};

export default Toc;
