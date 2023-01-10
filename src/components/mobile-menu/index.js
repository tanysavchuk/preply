import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../button';
import InputSearch from '../search';
import LanguagesSelect from '../languages-select';
import { Popover } from 'react-tiny-popover';
import PropTypes from 'prop-types';

const MobileMenu = (props) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleOpenMobileMenu = () => {
    setIsPopoverOpen(!isPopoverOpen);
    props.onOpenMobileMenu();
  };

  return (
    <>
      <div className="sm:visible   lg:w-0  lg:h-0 lg:overflow-hidden  flex justify-end sm:w-full z-20 ">
        <Popover
          containerStyle={{ zIndex: 20 }}
          isOpen={isPopoverOpen}
          positions={['bottom', 'right']}
          onClickOutside={() => setIsPopoverOpen(false)}
          content={({ positions }) => (
            <div className="bg-white w-[350px] rounded-3xl px-7 py-12 overflow-y-scroll h-[500px]  ">
              <div className="flex flex-wrap">
                <a href="#" className="mb-7 text-gray-600 text-base w-full hover:text-cyan-600">
                  Language resources
                </a>
                <a href="#" className="text-gray-600 text-base w-full  hover:text-cyan-600">
                  Articles for business
                </a>
              </div>
              <div className="my-5  ">
                <InputSearch activeBorderColor={'focus:border-red-600'} />
              </div>
              <div className="border-2 border-slate-200 rounded-2xl h-12 flex items-center justify-between    px-5">
                <LanguagesSelect
                  fontSize="text-base"
                  widthMobailMenu={'sm:w-[275px]'}
                  widthPopover={'w-36'}
                  backgroundPopover={'bg-white'}
                  textColorHover={'hover:text-cyan-600'}
                  textAlign={'text-center'}
                />
              </div>
              <div className="my-5 w-full text-center">
                <Button
                  title={'Find 1-on-1 tutors'}
                  borderRadius={'rounded-3xl'}
                  height={'h-12'}
                  textMediaSM={'sm:text-base'}
                  hoverBgColog={'hover:bg-cyan-500'}
                  marginRight={'mr-5'}
                  width={'w-full'}
                />
              </div>
              <div className=" w-full text-center">
                <Button
                  title={'Join group classes'}
                  borderRadius={'rounded-3xl'}
                  height={'h-12'}
                  textMediaSM={'sm:text-base'}
                  hoverBgColog={'hover:bg-cyan-500'}
                  marginRight={'mr-5'}
                  width={'w-full'}
                />
              </div>

              <div className="flex flex-wrap leading-10 font-semibold text-sm py-5 mt-7 text-gray-600  border-t-2 border-gray-100">
                <a href="#" className="w-1/3 hover:text-cyan-600">
                  English
                </a>
                <a href="#" className="w-1/3 hover:text-cyan-600">
                  Spanish
                </a>
                <a href="#" className="w-1/3 hover:text-cyan-600">
                  German
                </a>
                <a href="#" className="w-1/3 hover:text-cyan-600">
                  Italian
                </a>
                <a href="#" className="w-1/3 hover:text-cyan-600">
                  French
                </a>
                <a href="#" className="w-1/3 hover:text-cyan-600">
                  Russian
                </a>
                <a href="#" className="w-1/3 hover:text-cyan-600 ">
                  Portuguese
                </a>
                <a href="#" className="w-1/3 hover:text-cyan-600">
                  Polish
                </a>
                <a href="#" className="w-1/3 hover:text-cyan-600">
                  Swedish
                </a>
                <a href="#" className="w-1/3 hover:text-cyan-600">
                  Turkish
                </a>
                <a href="#" className="w-1/3 hover:text-cyan-600">
                  Arabic
                </a>
                <a href="#" className="w-1/3 hover:text-cyan-600">
                  Chinese
                </a>
                <a href="#" className="w-1/3 hover:text-cyan-600">
                  Japanese
                </a>
                <a href="#" className="w-1/3 hover:text-cyan-600">
                  Ukrainian
                </a>
                <a href="#" className="w-1/3 hover:text-cyan-600">
                  Korean
                </a>
              </div>
            </div>
          )}>
          <button onClick={() => handleOpenMobileMenu()}>
            <FontAwesomeIcon icon={faBars} className="text-gray-500 text-2xl font-light" />
          </button>
        </Popover>
      </div>
    </>
  );
};

MobileMenu.propTypes = {
  onOpenMobileMenu: PropTypes.func
};

export default MobileMenu;
