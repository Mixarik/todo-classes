import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => (
  <ul>
    <li>learn React</li>
    <li>apply for a job</li>
    <li>chill</li>
  </ul>
);

const Header = () => (
  <div>
    <h1>First Project List</h1>
  </div>
);

const App = () => (
  <div>
    <Header />
    <input placeholder='search' />
    <TodoList />
  </div>
);

const reactDom = document.getElementById('root');

ReactDOM.render(<App />, reactDom);
