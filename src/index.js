import React from 'react';
import ReactDOM from 'react-dom';

import Header from './comonents/app-header';
import SearchPanel from './comonents/search-panel';
import TodoList from './comonents/todo-list';
import './index.css';

const App = () => {
  const todoData = [
    { lable: 'Drink cofee', important: false, id: 1 },
    { lable: 'Learn React', important: true, id: 2 },
    { lable: 'Chill', important: false, id: 3 },
  ];
  return (
    <div className='main-position'>
      <div>
        <Header />
        <SearchPanel />
        <TodoList todos={todoData} />
      </div>
    </div>
  );
};

const reactDom = document.getElementById('root');

ReactDOM.render(<App />, reactDom);
