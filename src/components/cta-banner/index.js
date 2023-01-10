import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

const CtaBanner = ({ imgBanner, imgLogoBlack, title, width, lgWidth }) => {
  return (
    <div className={`block 2xl:w-72 sm:my-0 sm:mx-auto  ${width} ${lgWidth}`}>
      <div className="">
        <img src={`${imgBanner}`} className={`w-full `} />
      </div>
      <div className="flex justify-center mb-3">
        <img src={`${imgLogoBlack}`} />
      </div>
      <h2 className="text-2xl text-center font-semibold">{title}</h2>
      <div className="flex justify-center my-7">
        <Button title={'Learn more'} width={'w-5/6'} hoverBgColog={'hover:bg-cyan-500'} />
      </div>
    </div>
  );
};

CtaBanner.propTypes = {
  imgBanner: PropTypes.string,
  imgLogoBlack: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
  lgWidth: PropTypes.string
};

export default CtaBanner;
