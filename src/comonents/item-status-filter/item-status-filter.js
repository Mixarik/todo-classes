import React from 'react';
import './item-status-filter.css';

export default class FilterButtons extends React.Component {
  render() {
    {
      return (
        <div className='btn-group'>
          <button className='btn btn-info'>All</button>
          <button className='btn btn-outline-secondary'>Active</button>
          <button className='btn btn-outline-secondary'>Done</button>
        </div>
      );
    }
  }
}
