import React from 'react';
import FilterButtons from '../item-status-filter/item-status-filter';
import './search-panel.css';

const SearchPanel = ({filter,ChangeStateFilterButtons, ChangeSearchText }) => {
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
      <FilterButtons filter={filter} ChangeStateFilterButtons={ChangeStateFilterButtons} />
    </form>
  );
};
export default SearchPanel;
