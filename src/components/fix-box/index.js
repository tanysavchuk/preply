import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button';

const FixBox = (props) => {
  const [hiddenClass, setHiddenClass] = useState('-top-16');

  useEffect(() => {
    addEventListener('scroll', () => {
      if (window.scrollY > 335) setHiddenClass('top-0');
      else setHiddenClass('-top-16');
    });
  }, []);

  return (
    <div
      id="fixedBoxScroll"
      className={`transition-[top] flex justify-center bg-gray-700 ${hiddenClass} fixed h-16 left-0 z-50 w-full`}>
      <div className="flex w-[95%] justify-between items-center ">
        <div className="mr-5">
          <img src={`${props.imgLogo}`} className="h-10 "></img>
        </div>
        <div className="text-white text-lg">{props.title}</div>
        <div>
          <Button title={'Find your tutor'} width={'w-52'} height={'h-12'} />
        </div>
      </div>
    </div>
  );
};
FixBox.propTypes = {
  imgLogo: PropTypes.string,
  title: PropTypes.string
};

export default FixBox;
