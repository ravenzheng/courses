import React from 'react';
import PropTypes from 'prop-types';

import './Breadcrumb.css';

const Breadcrumb = (props) => {
  const menu = props.menu;
  const listItems = menu.map(menuItem => (
    <li className="note-breadcrumb-item" key={menuItem.name}>
      <a href={menuItem.link}>{menuItem.name}</a>
    </li>
  ));
  return (
    <div className="note-breadcrumb-section">
      <ul className="note-breadcrumbs">{listItems}</ul>
    </div>
  );
};
Breadcrumb.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string
  })).isRequired
};

export default Breadcrumb;
