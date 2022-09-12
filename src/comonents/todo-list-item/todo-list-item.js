import React from 'react';
import './todo-list-item.css';

export default class TodoListItem extends React.Component {
  state = {
    done: false,
    important: false,
  };

  TodoListItemClick = () => {
    this.setState(({ done }) => {
      return { done: !done };
    });
  };

  TodoListItemClickImportant = () => {
    this.setState(({ important }) => {
      return { important: !important };
    });
  };

  render() {
    const { lable, onDeletedB } = this.props;
    const { done } = this.state;
    const { important } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }
    return (
      <li className='list-group-item'>
        <span className={classNames}>
          <span className={classNames} onClick={this.TodoListItemClick}>
            {lable}
          </span>
          <span>
            <button className='btn btn-outline-danger' onClick={onDeletedB}>
              <i className='bi bi-trash' />
            </button>
            <button
              className='btn btn-success'
              onClick={this.TodoListItemClickImportant}
            >
              <i className='bi bi-bookmark-fill' />
            </button>
          </span>
        </span>
      </li>
    );
  }
}
