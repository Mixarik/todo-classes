import React from 'react';
import TodoListItem from './todo-list-item';
import './todo-list.css';

const TodoList = ({ todos }) => {
  const elements = todos.map((elem) => {
    const { id, ...items } = elem;

    return (
      <li key={id} className='list-group-item'>
        <TodoListItem {...items} />
      </li>
    );
  });

  return <ul className='list-group'>{elements}</ul>;
};
export default TodoList;
