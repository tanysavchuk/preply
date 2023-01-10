import React, { useState } from 'react';
import { Popover } from 'react-tiny-popover';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CheckboxDay() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <div>
      <Popover
        isOpen={isPopoverOpen}
        containerClassName="z-20 "
        positions={['bottom', 'left']}
        onClickOutside={() => setIsPopoverOpen(false)}
        content={({ position }) => (
          <div className="w-[400px] p-5 border border-gray-200 shadow-lg shadow-gray-200 rounded-lg bg-white ">
            <div className="flex justify-between items-center">
              {' '}
              <label className="flex mb-4">
                <div className=" ">
                  <input type={'checkbox'} className=" h-7 w-7  mr-3" />
                </div>
                <p className="text-base  "> Today</p>
              </label>
              <label className="flex mb-4">
                <div className=" ">
                  <input type={'checkbox'} className=" h-7 w-7  mr-3" />
                </div>
                <p className="text-base  "> Tomorrow</p>
              </label>
            </div>
            <div className=" flex flex-wrap border-t border-gray-200 py-4">
              <label className="flex mb-4 w-1/3">
                <div className=" ">
                  <input type={'checkbox'} className=" h-7 w-7  mr-3" />
                </div>
                <p className="text-base  "> Mon</p>
              </label>
              <label className="flex mb-4  w-1/3">
                <div className=" ">
                  <input type={'checkbox'} className=" h-7 w-7  mr-3" />
                </div>
                <p className="text-base  "> Tue</p>
              </label>
              <label className="flex mb-4  w-1/3">
                <div className=" ">
                  <input type={'checkbox'} className=" h-7 w-7  mr-3" />
                </div>
                <p className="text-base  "> Wed</p>
              </label>
              <label className="flex mb-4  w-1/3">
                <div className=" ">
                  <input type={'checkbox'} className=" h-7 w-7  mr-3" />
                </div>
                <p className="text-base  "> Thu</p>
              </label>
              <label className="flex mb-4  w-1/3">
                <div className=" ">
                  <input type={'checkbox'} className=" h-7 w-7  mr-3" />
                </div>
                <p className="text-base  "> Fri</p>
              </label>
              <label className="flex mb-4  w-1/3">
                <div className=" ">
                  <input type={'checkbox'} className=" h-7 w-7  mr-3" />
                </div>
                <p className="text-base  "> Sat</p>
              </label>
              <label className="flex mb-4  w-1/3">
                <div className=" ">
                  <input type={'checkbox'} className=" h-7 w-7  mr-3" />
                </div>
                <p className="text-base  "> Sun </p>
              </label>
            </div>
            <div className="border-t border-gray-200 py-4">
              <button>Clear </button>
            </div>
          </div>
        )}>
        <button
          className="border border-gray-300 rounded-lg  text-gray-700 text-lg font-semibold px-3 py-2 hover:bg-gray-50
           hover:text-cyan-700 hover:border-cyan-800 focus:bg-cyan-100 focus:text-cyan-700 focus:border-cyan-800 "
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
          Day
          <FontAwesomeIcon icon={faAngleDown} className="ml-2 text-base" />
        </button>
      </Popover>
    </div>
  );
}
export default CheckboxDay;
