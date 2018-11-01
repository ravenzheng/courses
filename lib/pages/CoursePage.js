import PropTypes from 'prop-types';
import React from 'react';
import '../style.css';

import CourseBody from '../components/CourseBody';

const CoursePage = (props) => {
  const course = props.course;
  const cssFile = `/${course.shortName}/assets/combined.css`;
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <head>
        <title>{course.shortName}</title>
        <link href={cssFile} rel="stylesheet" />
      </head>
      <body>
        <CourseBody course={props.course} />
      </body>
    </html>
  );
};

CoursePage.propTypes = {
  course: PropTypes.shape({
    shortName: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    chapters: PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      sections: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
      })).isRequired
    }).isRequired
  }).isRequired
};

export default CoursePage;
