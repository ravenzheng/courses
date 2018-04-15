import React from 'react';
import PropTypes from 'prop-types';

import './TagList.css';

const TagList = (props) => {
  const tags = props.tags;
  if (!tags || tags.length === 0) {
    return '';
  }
  const listItems = tags.map(tag => (
    <span className="note-tag" key={tag}>
      {tag}
    </span>
  ));
  return <div className="note-tags-section">{listItems}</div>;
};

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TagList;
