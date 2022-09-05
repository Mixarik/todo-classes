import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./comonents/app-header";
import SearchPanel from "./comonents/search-panel";
import TodoList from "./comonents/todo-list";

const App = () => (
  <div>
    <Header />
    <SearchPanel />
    <TodoList />
  </div>
);

const reactDom = document.getElementById('root');

ReactDOM.render(<App />, reactDom);
