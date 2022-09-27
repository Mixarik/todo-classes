import React from 'react';
import './item-status-filter.css';

export default class FilterButtons extends React.Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  render() {
    const { ChangeStateFilterButtons, filter } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const active = filter === name;
      const clazz = active
        ? 'btn-info btn-group-elem'
        : 'btn-outline-secondary';
      return (
        <button
          className={`btn ${clazz}`}
          onClick={(e) => {
            e.preventDefault();
            ChangeStateFilterButtons(name);
          }}
          key={name}
        >
          {label}
        </button>
      );
    });
    return <div className='btn-group'>{buttons}</div>;
  }
}
