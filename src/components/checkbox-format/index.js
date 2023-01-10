import React, { useState } from 'react';
import { Popover } from 'react-tiny-popover';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function CheckboxFormat() {
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
            <label className="flex mb-4">
              <div className=" ">
                <input type={'checkbox'} className=" h-7 w-7  mr-3" />
              </div>
              <div className="text-base  ">
                <p> One-time classes</p>
                <span className="text-gray-500 text-sm">
                  Single lessons that focus on a specific topic or on building a skill
                </span>
              </div>
            </label>
            <label className="flex mb-4">
              <div className=" ">
                <input type={'checkbox'} className=" h-7 w-7  mr-3" />
              </div>
              <div className="text-base  ">
                <p> Multi-week courses</p>
                <span className="text-gray-500 text-sm">
                  Bundle of classes with a progressive set of learning outcomes
                </span>
              </div>
            </label>

            <div className="border-t border-gray-200 py-4">
              <button>Clear </button>
            </div>
          </div>
        )}>
        <button
          className="border border-gray-300 rounded-lg  text-gray-700 text-lg font-semibold px-3 py-2 hover:bg-gray-50
           hover:text-cyan-700 hover:border-cyan-800 focus:bg-cyan-100 focus:text-cyan-700 focus:border-cyan-800 "
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
          Format
          <FontAwesomeIcon icon={faAngleDown} className="ml-2 text-base" />
        </button>
      </Popover>
    </div>
  );
}
export default CheckboxFormat;
