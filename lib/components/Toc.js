import React from 'react';
import PropTypes from 'prop-types';

import './CourseBody.css';

const ChapterItem = (props) => {
  const chapter = props.chapter;
  return (
    <li className="chapter-list-item">
      <a href={chapter.link}>{chapter.title}</a>
      <SectionList sections={chapter.sections} />
    </li>
  );
};
ChapterItem.propTypes = {
  chapter: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    sections: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string
    })).isRequired
  }).isRequired
};

const SectionList = (props) => {
  const listItems = props.sections.map(note => <SectionListItem key={note.name} section={note} />);
  if (listItems.length === 0) {
    return '';
  }
  return <ul className="section-list">{listItems}</ul>;
};

SectionList.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string
  })).isRequired
};

const SectionListItem = (props) => {
  const section = props.section;
  return (
    <li className="section-list-item">
      <a href={section.link}>{section.title}</a>
    </li>
  );
};
SectionListItem.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string
  }).isRequired
};

const Toc = (props) => {
  const chapters = props.course.chapters;
  const chapterList = chapters.map(element => (
    <ChapterItem chapter={element} key={element.chapterNum} />
  ));
  return (
    <section className="toc-section">
      <h2 className="toc-head">Table of Content</h2>
      <ul className="chapter-list">{chapterList}</ul>
    </section>
  );
};

Toc.propTypes = {
  course: PropTypes.object.isRequired
};

export default Toc;
