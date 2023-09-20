import React from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter';

const Footer = (props) => {
  return (
    <footer className="footer">
      <span className="todo-count">{props.todoCount} items left</span>
      <TasksFilter completed={props.completed} active={props.active} all={props.all} setMode={props.setMode} />
      <button className="clear-completed" onClick={props.clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  todoCount: 999,
  completed: false,
  active: false,
  all: false,
  setMode: () => {},
  clearCompleted: () => {},
};

Footer.PropTypes = {
  todoCount: PropTypes.number,
  completed: PropTypes.bool,
  active: PropTypes.bool,
  all: PropTypes.bool,
  setMode: PropTypes.func,
  clearCompleted: PropTypes.func,
};

export default Footer;
