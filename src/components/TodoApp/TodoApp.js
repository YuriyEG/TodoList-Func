import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Footer from '../Footer';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';

const TodoApp = () => {
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [listMode, setListMode] = useState('all');
  const [todoList, setTodoList] = useState([
    { value: 'first', id: 744331322556, important: false, done: false, time: new Date() },
    { value: 'second', id: 640949365978, important: false, done: false, time: new Date() },
  ]);

  let filteredTasks = todoList;

  if (listMode === 'active') {
    filteredTasks = [...todoList].filter((node) => node.done === false);
  }
  if (listMode === 'completed') {
    filteredTasks = [...todoList].filter((node) => node.done === true);
  }
  const createTask = (e) => {
    if (e.keyCode === 13 && e.target.value.replace(/ /g, '').length) {
      const newTask = {
        value: e.target.value,
        id: Math.round(Math.random() * Date.now()).toString(),
        important: false,
        done: false,
        time: new Date(),
      };
      e.target.value = '';
      const newTodoList = [newTask, ...todoList];
      setTodoList(newTodoList);
    }
  };

  const deleteTask = (id) => {
    const filteredList = [...todoList].filter((el) => el.id !== id);
    setTodoList(filteredList);
  };

  const onToggleImportant = (id) => {
    const indx = todoList.findIndex((el) => el.id === id);
    const oldItem = todoList[indx];
    const newItem = { ...oldItem, important: !oldItem.important };
    const newArray = [...todoList.slice(0, indx), newItem, ...todoList.slice(indx + 1)];
    setTodoList(newArray);
  };

  const onToggleDone = (id) => {
    const indx = todoList.findIndex((el) => el.id === id);
    const oldItem2 = todoList[indx];
    const newItem2 = { ...oldItem2, done: !oldItem2.done };
    const newArray2 = [...todoList.slice(0, indx), newItem2, ...todoList.slice(indx + 1)];
    setTodoList(newArray2);
  };

  const setListModeFunc = (mode) => {
    if (mode === 'active') {
      setActive(true);
      setAll(false);
      setCompleted(false);
    }
    if (mode === 'completed') {
      setCompleted(true);
      setAll(false);
      setActive(false);
    }

    if (mode === 'all') {
      setCompleted(false);
      setAll(true);
      setActive(false);
    }

    setListMode(mode);
  };

  const clearCompleted = () => {
    const newArray = [];
    [...todoList].forEach((node) => {
      if (node.done !== true) {
        newArray.push(node);
      }
    });
    setTodoList(newArray);
  };

  const setTodoListFunc = (id, editValue) => {
    const indx = todoList.findIndex((el) => el.id === id);
    const node = todoList[indx];
    const editedTask = {
      ...node,
      value: editValue,
      time: new Date(),
    };
    const newTodoList = [...todoList.slice(0, indx), editedTask, ...todoList.slice(indx + 1)];
    setTodoList(newTodoList);
  };

  const doneCount = todoList.filter((el) => el.done).length;
  const todoCount = todoList.length - doneCount;

  return (
    <div className="todoapp" style={{ position: 'relative' }}>
      <section className="main">
        <NewTaskForm createTask={createTask} />

        <TaskList
          todoList={filteredTasks}
          deleteTask={deleteTask}
          onToggleImportant={onToggleImportant}
          onToggleDone={onToggleDone}
          listMode={listMode}
          setTodoList={setTodoListFunc}
        />
        <Footer
          todoCount={todoCount}
          clearCompleted={clearCompleted}
          setMode={setListModeFunc}
          all={all}
          active={active}
          completed={completed}
        />
      </section>
    </div>
  );
};

TodoApp.defaultProps = {
  all: false,
  active: false,
  completed: false,
  listMode: '',
  todoList: [],
  createTask: () => {},
  deleteTask: () => {},
  onToggleDone: () => {},
  onToggleImportant: () => {},
  setListMode: () => {},
  clearCompleted: () => {},
  setTodoList: () => {},
};

TodoApp.PropTypes = {
  all: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
  completed: PropTypes.isRequired,
  listMode: PropTypes.string.isRequired,
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
  createTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onToggleImportant: PropTypes.func.isRequired,
  setListMode: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  setTodoList: PropTypes.func.isRequired,
};

export default TodoApp;
