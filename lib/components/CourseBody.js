import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Toc from './Toc';

import './CourseBody.css';

const CourseBody = (props) => {
  const courseName = props.course.fullName;
  return (
    <React.Fragment>
      <Header />
      <Main title={courseName}>
        <Toc course={props.course} />
      </Main>
      <Footer />
    </React.Fragment>
  );
};

CourseBody.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseBody;
