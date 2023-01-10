import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <>
      <button
        onClick={() => console.log('sdssss')}
        className={`bg-cyan-600 text-white text-lg py-3 px-5 rounded-xl  ${props.width} ${props.borderRadius} ${props.height} 
        ${props.fontSize} 
        ${props.hoverBgColog} 
        ${props.marginRight}
        ${props.textColor} 
        ${props.hoverTextColor} 
        ${props.hoverBorderColor} 
        ${props.border} 
        ${props.bgColor} 
        ${props.textMediaSM}
        ${props.textMediaXL} 
        ${props.fontWeight}
    `}>
        {props.icon}
        {props.title}
      </button>
    </>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  width: PropTypes.string,
  borderRadius: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  hoverBgColog: PropTypes.string,
  marginRight: PropTypes.string,
  textColor: PropTypes.string,
  hoverTextColor: PropTypes.string,
  borderColor: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  border: PropTypes.string,
  bgColor: PropTypes.string,
  textMediaSM: PropTypes.string,
  textMediaXL: PropTypes.string,
  fontWeight: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
