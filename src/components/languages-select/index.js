import React, { useState } from 'react';
import { Popover } from 'react-tiny-popover';
import PropTypes from 'prop-types';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LanguagesSelect = (props) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div
      className={` ${props.borderRight}  ${props.borderColor} ${props.MediapaddingX}  h-9 flex items-center text-gray-600  
      ${props.widthMobailMenu} ${props.widthMediaLg} ${props.widthMediaXl} ${props.width}  ${props.marginRight} 
        lg:px-2  z-20`}>
      <Popover
        isOpen={isPopoverOpen}
        containerClassName="z-20 "
        positions={['bottom', 'left']}
        onClickOutside={() => setIsPopoverOpen(false)}
        content={({ position }) => (
          <div
            className={` h-54 bg-white ${props.widthPopover} ${props.MinWidthMediaMd} ${props.MinWidthMediaSm}
            ${props.backgroundPopover}
            rounded-2xl p-3 shadow-lg   `}>
            <ul
              className={`leading-8 text-gray-600
            ${props.textAlign}
            `}>
              <li
                className={`${props.textColorHover} ${props.backgroundHover} ${props.borderRadius}`}>
                Français
              </li>
              <li
                className={`${props.textColorHover} ${props.backgroundHover} ${props.borderRadius}`}>
                Deutsch
              </li>
              <li
                className={`${props.textColorHover} ${props.backgroundHover} ${props.borderRadius}`}>
                Italiano
              </li>
              <li
                className={`${props.textColorHover} ${props.backgroundHover} ${props.borderRadius}`}>
                Polski
              </li>
              <li
                className={`${props.textColorHover} ${props.backgroundHover} ${props.borderRadius}`}>
                Español
              </li>
              <li
                className={`${props.textColorHover} ${props.backgroundHover} ${props.borderRadius}`}>
                Українська
              </li>
            </ul>
          </div>
        )}>
        <button
          className={` xl:text-base flex justify-between items-center w-full ${props.textColor} ${props.width} ${props.borderRadius} 
           ${props.border} ${props.fontSize} ${props.textMediaSM} 
           ${props.fontSize}`}
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
          English
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`text-gray-500  font-extralight text-sm  pl-1 ${props.fontWeight}`}
          />
        </button>
      </Popover>
    </div>
  );
};
LanguagesSelect.propTypes = {
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.string,
  borderRight: PropTypes.string,
  borderColor: PropTypes.string,
  fontSize: PropTypes.string,
  MediapaddingX: PropTypes.string,
  textMediaSM: PropTypes.string,
  widthMobailMenu: PropTypes.string,
  widthMediaLg: PropTypes.string,
  widthMediaXl: PropTypes.string,
  marginRight: PropTypes.string,
  widthPopover: PropTypes.string,
  textColor: PropTypes.string,
  MinWidthMediaMd: PropTypes.string,
  MinWidthMediaSm: PropTypes.string,

  backgroundPopover: PropTypes.string,
  textColorHover: PropTypes.string,
  backgroundHover: PropTypes.string,
  textAlign: PropTypes.string,
  fontWeight: PropTypes.string
};

export default LanguagesSelect;
