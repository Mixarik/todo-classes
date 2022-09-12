import React from 'react';
import './counter-todos.css';

const CounterTodos = ({todo ,done}) => {
  return <div className='todos-counter'>{todo} more to do, {done} done</div>;
};

export default CounterTodos;
