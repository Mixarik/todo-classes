import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ lable, important = false }) => {
  const ColorImportant = {
    color: important ? 'red' : 'black',
  };

  return (
    <div className='todo-list-item'>
      <span style={ColorImportant}>{lable}</span>
      <span>
        <button className='btn btn-outline-danger'>
          <i className='bi bi-trash'></i>
        </button>
        <button className='btn btn-success'>
          <i className='bi bi-bookmark-fill'></i>
        </button>
      </span>
    </div>
  );
};

export default TodoListItem;
