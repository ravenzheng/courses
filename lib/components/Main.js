import React from 'react';
import PropTypes from 'prop-types';
import './Main.css';

const Main = (props) => {
  const children = props.children;
  return (
    <main className="container">
      <div className="note-content">{children}</div>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.element.isRequired
};

export default Main;
