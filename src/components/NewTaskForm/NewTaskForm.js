import React from 'react';
import PropTypes from 'prop-types';

function NewTaskForm({ createTask }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <div className="new-todo__wrapper">
        <input className="new-todo" onKeyDown={(e) => createTask(e)} placeholder="What needs to be done?" autoFocus />
      </div>
    </header>
  );
}

NewTaskForm.defaultProps = {
  createTask: () => {},
};

NewTaskForm.PropTypes = {
  createTask: PropTypes.func,
};

export default NewTaskForm;
