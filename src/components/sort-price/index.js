import React, { useState } from 'react';
import { Popover } from 'react-tiny-popover';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SortPrice() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <div>
      <Popover
        isOpen={isPopoverOpen}
        positions={['top', 'right']}
        onClickOutside={() => setIsPopoverOpen(false)}
        content={({ position }) => (
          <div className="bg-gray-100 shadow-lg shadow-gray-200 p-3">
            <label className="flex">
              <input type={'checkbox'} className="" />
              <p className="text-gray-700 hover:bg-blue-500 hover:text-white ml-1 ">
                {' '}
                Our top picks
              </p>
            </label>
            <label className="flex">
              <input type={'checkbox'} />
              <p className="text-gray-700 hover:bg-blue-500 hover:text-white ml-1">
                {' '}
                Highest rated
              </p>
            </label>
            <label className="flex">
              <input type={'checkbox'} />
              <p className="text-gray-700 hover:bg-blue-500 hover:text-white ml-1"> Most popular</p>
            </label>
            <label className="flex">
              <input type={'checkbox'} />
              <p className="text-gray-700 hover:bg-blue-500 hover:text-white ml-1">
                {' '}
                Price low to high
              </p>
            </label>
            <label className="flex">
              <input type={'checkbox'} />
              <p className="text-gray-700 hover:bg-blue-500 hover:text-white ml-1">
                {' '}
                Price high to low
              </p>
            </label>
          </div>
        )}>
        <button
          className="text-base font-semibold text-cyan-700"
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
          Sort by:
          <FontAwesomeIcon icon={faAngleDown} className="ml-2 text-base" />
        </button>
      </Popover>
    </div>
  );
}

export default SortPrice;
