import React from 'react';
import FilterButtons from '../item-status-filter/item-status-filter';
import './search-panel.css';

const SearchPanel = () => {
  return (
    <div className='searchBar-position'>
      <input placeholder='search' className='form-control m-2' />
      <FilterButtons />
    </div>
  );
};

export default SearchPanel;