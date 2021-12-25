import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="filters">
      {filters.map((item) => (
        <button
          key={item}
          className={`filters__item ${
            item === selected ? 'filters__item_active' : ''
          }`}
          onClick={(evt) => {
            onSelectFilter(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

Toolbar.propTypes = propTypes;

export default Toolbar;
