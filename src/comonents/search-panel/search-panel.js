import React from 'react';
import FilterButtons from '../item-status-filter/item-status-filter';
import './search-panel.css';

const SearchPanel = ({ ChangeSearchText }) => {
  const onChange = (e) => {
      ChangeSearchText(e.target.value.toLowerCase());
  };

  return (
    <form className='searchBar-position'>
      <input
        placeholder='search'
        className='form-control m-2'
        onChange={onChange}
      />
      <FilterButtons />
    </form>
  );
};
export default SearchPanel;
