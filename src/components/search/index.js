import React from 'react';
import PropTypes from 'prop-types';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputSearch = () => {
  return (
    <div className="flex items-center justify-between">
      <input
        type="search"
        placeholder="Search results for..."
        className={`border-2 border-slate-200 h-12 flex items-center justify-between xl:px-8  sm:px-5 lg:ml-3 xl:ml-0 rounded-2xl
        sm:w-[295px] lg:w-[250px] xl:w-[295px] focus:outline-cyan-600`}
      />
      <div className="w-0 h-0 relative">
        {' '}
        <button type="submit" className=" relative right-10 sm:bottom-3">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default InputSearch;
