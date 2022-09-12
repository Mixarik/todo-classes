import React from 'react';

import Header from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todos-list/todo-list';
import CounterTodos from '../counter-todos/counter-todos';
import CreateItemList from '../create-list-panel/create-list-panel';
import './app.css';

export default class App extends React.Component {
  maxId = 100;

  state = {
    todoData: [
      this.createNewItem('drink cofee'),
      this.createNewItem('Learn React'),
      this.createNewItem('Chill'),
    ],
  };

  createNewItem(lable) {
    return {
      lable: lable,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  onDeleted = (id) => {
    this.setState(({ todoData }) => {
      const newList = todoData.filter((el) => el.id !== id);
      return {
        todoData: newList,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createNewItem(text);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  ToggleProperty = (arr, id, property) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [property]: !oldItem[property] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  ToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.ToggleProperty(todoData, id, 'important'),
      };
    });
  };

  ToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.ToggleProperty(todoData, id, 'done'),
      };
    });
  };

  render() {
    return (
      <div className='main-position'>
        <div>
          <div className='header-counter'>
            <Header />
            <CounterTodos
              done={this.state.todoData.filter((el) => el.done).length}
              todo={this.state.todoData.filter((el) => !el.done).length}
            />
          </div>
          <SearchPanel />
          <TodoList
            ToggleDone={this.ToggleDone}
            ToggleImportant={this.ToggleImportant}
            todos={this.state.todoData}
            onDeleted={this.onDeleted}
          />
          <CreateItemList addItem={this.addItem} />
        </div>
      </div>
    );
  }
}
