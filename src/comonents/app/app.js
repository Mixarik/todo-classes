import React from 'react';

import Header from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todos-list/todo-list';
import CounterTodos from '../counter-todos/counter-todos';
import './app.css';

const App = () => {
  const todoData = [
    { lable: 'Drink cofee', important: false, id: 1 },
    { lable: 'Learn React', important: true, id: 2 },
    { lable: 'Chill', important: false, id: 3 },
  ];
  return (
    <div className='main-position'>
      <div>
        <div className='header-counter'>
          <Header />
          <CounterTodos />
        </div>
        <SearchPanel />
        <TodoList todos={todoData} />
      </div>
    </div>
  );
};

export default App;
