import React from 'react';
import './create-list-panel.css';

const CreateItemList = ({ addItem }) => {
  return (
    <div className='col'>
      <input
        type='text'
        className='form-control create-item-list'
        placeholder='List name'
        aria-label='First name'
      />
      <div className='d-grid gap-2 d-md-block'>
        <button
          className='btn btn-primary create-list-btn'
          type='button'
          onClick={() => addItem('hw')}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CreateItemList;
