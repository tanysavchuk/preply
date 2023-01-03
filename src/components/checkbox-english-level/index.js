import React, { useState } from 'react';
import { Popover } from 'react-tiny-popover';
import { faAngleDown, faSignal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function EnglishLevel() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <div className="">
      <Popover
        isOpen={isPopoverOpen}
        containerClassName="z-20 "
        positions={['bottom', 'left']}
        onClickOutside={() => setIsPopoverOpen(false)}
        content={({ position }) => (
          <div className="w-[570px] p-5 border border-gray-200 shadow-lg shadow-gray-200 rounded-lg bg-white ">
            <label className="flex mb-4">
              <div className=" ">
                <input type={'checkbox'} className=" h-7 w-7  mr-3" />
              </div>
              <div className="text-base  ">
                <p> Elementary (A1)</p>
                <span className="text-gray-500 text-sm">I don’t speak English very well.</span>
              </div>
            </label>
            <label className="flex mb-4">
              <div className=" ">
                <input type={'checkbox'} className=" h-7 w-7  mr-3" />
              </div>
              <div>
                <p className="text-base  ">Pre Intermediate (A2)</p>
                <span className="text-gray-500 text-sm">
                  I can speak some English but it’s difficult.
                </span>
              </div>
            </label>
            <label className="flex mb-4">
              <div className=" ">
                <input type={'checkbox'} className=" h-7 w-7  mr-3" />
              </div>
              <div>
                <p className="text-base  "> Intermediate (B1)</p>
                <span className="text-gray-500 text-sm">
                  I can talk in English but need more vocabulary and still make mistakes.
                </span>
              </div>
            </label>
            <label className="flex mb-4">
              <div className=" ">
                <input type={'checkbox'} className=" h-7 w-7  mr-3" />
              </div>
              <div>
                <p className="text-base  "> Upper Intermediate (B2)</p>
                <span className="text-gray-500 text-sm">
                  I can confidently engage in conversation about most subjects in English.
                </span>
              </div>
            </label>

            <label className="flex mb-4">
              <div className=" ">
                <input type={'checkbox'} className=" h-7 w-7  mr-3" />
              </div>
              <div>
                <p className="text-base "> Advanced (C1)</p>
                <span className="text-gray-500 text-sm">
                  I’ve mastered English. I’m fluent and articulate.
                </span>
              </div>
            </label>

            <div className="border-t border-gray-200 py-4">
              <a href="#" className="text-cyan-800 hover:text-cyan-600">
                <FontAwesomeIcon icon={faSignal} className="mr-3 text-cyan-800 font-semibold" />
                Identify your level
              </a>
            </div>
          </div>
        )}>
        <button
          className="border border-gray-300 rounded-lg  text-gray-700 text-lg font-semibold px-3 py-2 hover:bg-gray-50
           hover:text-cyan-700 hover:border-cyan-800 focus:bg-cyan-100 focus:text-cyan-700 focus:border-cyan-800 "
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
          English Level
          <FontAwesomeIcon icon={faAngleDown} className="ml-2 text-base" />
        </button>
      </Popover>
    </div>
  );
}
export default EnglishLevel;
