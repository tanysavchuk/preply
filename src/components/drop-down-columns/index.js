import React from 'react';
import PropTypes from 'prop-types';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DropDowmColumn = (props) => {
  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      className="flex w-full justify-between items-center mb-7">
      <h2 id="accordion-collapse-heading" className="text-base font-semibold ">
        <button
          type="button"
          data-accordion-target="#accordion-collapse-body"
          aria-expanded="true"
          aria-controls="accordion-collapse-body">
          {props.data.title}
          <FontAwesomeIcon
            data-accordion-icon
            icon={faAngleDown}
            className="font-semibold text-xs ml-5"
          />
        </button>
      </h2>

      <ul
        id="accordion-collapse-body-1"
        className="hidden"
        aria-labelledby="accordion-collapse-heading">
        {props.data.list.map((link, index) => (
          <li key={`${link.name}-${index}`}>{link.name}</li>
        ))}
      </ul>
    </div>
  );
};

DropDowmColumn.propTypes = {
  data: PropTypes.object
};

export default DropDowmColumn;
