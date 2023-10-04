import React from 'react';
import PropTypes from 'prop-types';

function TasksFilter({ setMode, all, active, completed }) {
  const allClass = all ? 'selected' : 'none';
  const activeClass = active ? 'selected' : 'none';
  const completedClass = completed ? 'selected' : 'none';

  return (
    <ul className="filters">
      <li>
        <button className={allClass} onClick={(e) => setMode('all', e.target)}>
          All
        </button>
      </li>
      <li>
        <button className={activeClass} onClick={(e) => setMode('active', e.target)}>
          Active
        </button>
      </li>
      <li>
        <button className={completedClass} onClick={(e) => setMode('completed', e.target)}>
          Completed
        </button>
      </li>
    </ul>
  );
}

TasksFilter.defaultProps = {
  setMode: 'default string',
  all: false,
  active: false,
  completed: false,
};

TasksFilter.PropTypes = {
  setMode: PropTypes.string,
  all: PropTypes.bool,
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

export default TasksFilter;
