import React from 'react';
import PropTypes from 'prop-types';

const Edit = ({ editValue, setValue, saveTodo, closeEdit }) => {
  return (
    <li className="editing">
      <div
        style={{
          position: 'absolute',
          width: '1000px',
          height: '600px',
          top: '-180px',
          left: '-200px',
          zIndex: '8',
        }}
        onClick={closeEdit}
      ></div>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">Editing task</span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      <input
        type="text"
        value={editValue}
        onKeyDown={(e) => saveTodo(e)}
        onChange={(e) => setValue(e)}
        className="edit"
        style={{ zIndex: '9' }}
      />
    </li>
  );
};

Edit.defaultProps = {
  editValue: '',
  setValue: '',
  saveTodo: () => {},
};

Edit.PropTypes = {
  editValue: PropTypes.string,
  setValue: PropTypes.string,
  saveTodo: PropTypes.func,
};

export default Edit;
