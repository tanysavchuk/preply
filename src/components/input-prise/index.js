import React, { useState } from 'react';
import { Popover } from 'react-tiny-popover';
import { faAngleDown, faSignal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InputPrise() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <div>
      <Popover
        isOpen={isPopoverOpen}
        containerClassName="z-20 "
        positions={['bottom', 'left']}
        onClickOutside={() => setIsPopoverOpen(false)}
        content={({ position }) => (
          <div className="w-[300px] px-5  py-7 border border-gray-200 shadow-lg shadow-gray-200 rounded-lg bg-white ">
            <div className="flex justify-between items-center">
              <label className="mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Min price</p>
                </div>
                <div className=" ">
                  <input
                    type="text"
                    placeholder="UAH"
                    className="h-10 w-28 border border-gray-400 rounded-md px-2 outline-none"
                  />
                </div>
              </label>
              <label className=" mb-4">
                <div>
                  <p className="text-sm text-gray-600  mb-2">Max price</p>
                </div>
                <div className=" ">
                  <input
                    type="text"
                    placeholder="UAH"
                    className="h-10 w-28 border border-gray-400 rounded-md px-2 outline-none"
                  />
                </div>
              </label>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <button>Clear </button>
            </div>
          </div>
        )}>
        <button
          className="border border-gray-300 rounded-lg  text-gray-700 text-lg font-semibold px-3 py-2 hover:bg-gray-50
           hover:text-cyan-700 hover:border-cyan-800 focus:bg-cyan-100 focus:text-cyan-700 focus:border-cyan-800 "
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
          Prise
          <FontAwesomeIcon icon={faAngleDown} className="ml-2 text-base" />
        </button>
      </Popover>
    </div>
  );
}
export default InputPrise;
