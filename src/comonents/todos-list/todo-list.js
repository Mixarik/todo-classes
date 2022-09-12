import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeletedA }) => {
  const elements = todos.map((elem) => {
    const { id, ...items } = elem;
    return (
      <TodoListItem
        key={id}
        lable={items.lable}
        important={items.important}
        onDeletedB={() => onDeletedA(id)}
      />
    );
  });

  return <ul className='list-group'>{elements}</ul>;
};
export default TodoList;
