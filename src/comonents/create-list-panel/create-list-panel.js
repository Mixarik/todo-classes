import React from 'react';
import './create-list-panel.css';

export default class CreateItemList extends React.Component {
  state = {
    lable: '',
  };
  ChangeStateForm = (e) => {
    this.setState(() => {
      return {
        lable: e.target.value,
      };
    });
  };
  OnSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.lable);
    this.setState(() => {
      return {
        lable: '',
      };
    });
  };

  render() {
    return (
      <form
        className='col'
        onChange={this.ChangeStateForm}
        onSubmit={this.OnSubmit}
      >
        <input
          type='text'
          className='form-control create-item-list'
          placeholder='List name'
          aria-label='First name'
          value={this.state.lable}
        />
        <div className='d-grid gap-2 d-md-block'>
          <button
            className='btn btn-primary create-list-btn'
            type='button'
            onClick={this.OnSubmit}
          >
            Add
          </button>
        </div>
      </form>
    );
  }
}
