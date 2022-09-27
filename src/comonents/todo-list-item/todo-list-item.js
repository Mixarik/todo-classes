import React from 'react';
import './todo-list-item.css';

export default class TodoListItem extends React.Component {
  render() {
    const { label, onDeleted, ToggleDone, ToggleImportant, done, important } =
      this.props;

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
          <span className={classNames} onClick={ToggleDone}>
            {label}
          </span>
          <span>
            <button className='btn btn-outline-danger' onClick={onDeleted}>
              <i className='bi bi-trash' />
            </button>
            <button className='btn btn-success' onClick={ToggleImportant}>
              <i className='bi bi-bookmark-fill' />
            </button>
          </span>
        </span>
      </li>
    );
  }
}
