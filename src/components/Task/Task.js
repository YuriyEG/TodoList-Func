import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

import Timer from '../Timer';
import Edit from '../Edit';

function Task({ value, deleteTask, setTodoList, id, onToggleDone, important, done, time }) {
  const [editStatus, setEditStatus] = useState(false);
  const [editValue, setEditValue] = useState(value);

  let taskClass = '';
  if (done) {
    taskClass = 'classDone description';
  } else {
    taskClass = 'description';
  }

  if (important) {
    taskClass += ' classImportant';
  }

  let checkClass = '';
  if (done) {
    checkClass = 'checkedImageBase checkedImage';
  } else {
    checkClass = 'checkedImageBase uncheckedImage';
  }

  const initialEdit = () => {
    setEditStatus(true);
  };

  const setValue = (e) => {
    setEditValue(e.target.value);
  };

  const saveTodo = (e) => {
    if (e.keyCode === 13 && e.target.value.replace(/ /g, '').length) {
      setTodoList(id, editValue);
      setEditStatus(false);
    }
  };

  const closeEdit = () => {
    setTodoList(id, editValue);
    setEditStatus(false);
  };
  const distance = formatDistanceToNow(time, { includeSeconds: true });

  return (
    <div>
      {editStatus ? (
        <Edit saveTodo={saveTodo} closeEdit={closeEdit} editValue={editValue} setValue={setValue} />
      ) : (
        <div>
          <li>
            <div className="view">
              <div className={checkClass} onClick={onToggleDone}></div>
              <label>
                <span className={taskClass} onClick={onToggleDone}>
                  {' '}
                  {value}
                </span>
                <Timer id={id} />
                <span className="created">created {distance} ago</span>
              </label>
              <button className="icon icon-edit" onClick={initialEdit}></button>
              <button className="icon icon-destroy" onClick={() => deleteTask(id)}></button>
            </div>
          </li>
        </div>
      )}
    </div>
  );
}

Task.defaultProps = {
  value: '',
  deleteTask: () => {},
  setTodoList: () => {},
  id: '9999999',
  onToggleImportant: () => {},
  onToggleDone: () => {},
  important: 'false',
  done: 'false',
  time: {},
};

Task.PropTypes = {
  value: PropTypes.string,
  deletedTask: PropTypes.func,
  setTodoList: PropTypes.func,
  id: PropTypes.string,
  onToggleImportant: PropTypes.func,
  onToggleDone: PropTypes.func,
  important: PropTypes.string,
  done: PropTypes.bool,
  time: PropTypes.object,
};

export default Task;
