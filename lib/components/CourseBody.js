import React from 'react';
import PropTypes from 'prop-types';
import Main from './Main';
import Breadcrumb from './Breadcrumb';

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
  const homework = props.course.homework;
  const misc = props.course.misc;
  return (
    <Main title={courseName}>
      <React.Fragment>
        <Breadcrumb menu={props.menu} />
        <NoteList notes={homework} name="homework" key="Homework" />
        <NoteList notes={misc} name="misc" key="Misc" />
        <NoteList notes={notes} name="notes" key="Notes" />
      </React.Fragment>
    </Main>
  );
};

CourseBody.propTypes = {
  menu: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired
};

export default CourseBody;