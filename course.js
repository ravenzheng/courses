import React from 'react';
import ReactDOM from 'react-dom';
import 'github-markdown-css/github-markdown.css';

import CourseBody from './lib/components/CourseBody';

import './lib/style.css';
import course from './course-sample.json';

ReactDOM.render(<CourseBody course={course} />, document.getElementById('app'));
