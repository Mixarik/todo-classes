import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, ToggleDone, ToggleImportant }) => {
  const elements = todos.map((elem) => {
    const { id, ...item } = elem;
    return (
      <TodoListItem
        ToggleDone={() => ToggleDone(id)}
        ToggleImportant={() => ToggleImportant(id)}
        key={id}
        lable={item.lable}
        done={item.done}
        important={item.important}
        onDeleted={() => onDeleted(id)}
      />
    );
  });

  return <ul className='list-group'>{elements}</ul>;
};
export default TodoList;
