import React from 'react';
import './todo-list-item.css';

export default class TodoListItem extends React.Component {
  state = {
    done: false,
    important: false,
  };

  TodoListItemClick = () => {
    this.setState({
      done: true,
    });
  };

  TodoListItemClickImportant = () => {
    this.setState({
      important: true,
    });
  };

  render() {
    const { lable } = this.props;
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
      <span className={classNames}>
        <span className={classNames} onClick={this.TodoListItemClick}>
          {lable}
        </span>
        <span>
          <button className='btn btn-outline-danger'>
            <i className='bi bi-trash'></i>
          </button>
          <button className='btn btn-success'>
            <i
              className='bi bi-bookmark-fill'
              onClick={this.TodoListItemClickImportant}
            ></i>
          </button>
        </span>
      </span>
    );
  }
}
