import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import './CourseBody.css';

const NoteListItem = (props) => {
  const note = props.note;
  return (
    <li className="list-item">
      <a href={note.link}>{note.name}</a>
    </li>
  );
};
NoteListItem.propTypes = {
  note: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string
  }).isRequired
};

const NoteList = (props) => {
  const listItems = props.notes.map(note => <NoteListItem key={note.name} note={note} />);
  if (listItems.length === 0) {
    return '';
  }
  const ulClassName = `${props.name}-list`;
  return (
    <section className="course-section">
      <h3 className="course-section-head">{props.name}</h3>
      <ul className={ulClassName}>{listItems}</ul>
    </section>
  );
};

NoteList.propTypes = {
  name: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
};

const CourseBody = (props) => {
  const courseName = props.course.fullName;
  const notes = props.course.notes;
  const sections = props.course.sections;
  const homework = props.course.homework;
  const misc = props.course.misc;
  const topics = props.course.topics;
  return (
    <React.Fragment>
      <Header />
      <Main title={courseName}>
        <React.Fragment>
          <NoteList notes={homework} name="homework" key="Homework" />
          <NoteList notes={misc} name="misc" key="Misc" />
          <NoteList notes={notes} name="notes" key="Notes" />
          <NoteList notes={sections} name="sections" key="Sections" />
          <NoteList notes={topics} name="topics" key="Topics" />
        </React.Fragment>
      </Main>
      <Footer />
    </React.Fragment>
  );
};

CourseBody.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseBody;
