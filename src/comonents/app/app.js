import React from 'react';

import Header from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todos-list/todo-list';
import CounterTodos from '../counter-todos/counter-todos';
import CreateItemList from '../create-list-panel/create-list-panel';
import './app.css';

export default class App extends React.Component {
  state = {
    todoData: [
      { lable: 'Drink cofee', important: false, id: 1 },
      { lable: 'Learn React', important: true, id: 2 },
      { lable: 'Chill', important: false, id: 3 },
    ],
  };

  onDeleted = (id) => {
    this.setState(({ todoData }) => {
      const newList = todoData.filter((el) => el.id !== id);
      return {
        todoData: newList,
      };
    });
  };

  addItem = (text) => {
    const newItem = {
      lable: text,
      important: false,
      id: new Date().getTime(),
    };
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData:newArr,
      };
    });
  };

  render() {
    return (
      <div className='main-position'>
        <div>
          <div className='header-counter'>
            <Header />
            <CounterTodos />
          </div>
          <SearchPanel />
          <TodoList todos={this.state.todoData} onDeletedA={this.onDeleted} />
          <CreateItemList addItem={this.addItem} />
        </div>
      </div>
    );
  }
}
