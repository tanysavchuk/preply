import React from 'react';
import PropTypes from 'prop-types';

const Guide = (props) => {
  return (
    <div className="bg-white rounded-3xl p-5 hover:shadow-lg transition-shadow  h-44  w-[23%]  m-3">
      <a href="">
        <h3 className="font-semibold text-base">
          {props.guide.title}{' '}
          <span className="text-gray-500 font-light pl-1.5 text-sm">
            {' '}
            {props.guide.topicsCount}{' '}
          </span>
        </h3>
        <div className="h-20">
          {' '}
          <p className="text-gray-500 font-light my-2 text-sm">{props.guide.description}</p>
        </div>
        <div className="flex items-center">{levelDots(props.guide.level)}</div>
      </a>
    </div>
  );
};

const levelDots = (level) => {
  if (level === 1) {
    return <span className="bg-green-400 h-3.5 w-3.5 rounded-full mr-1.5"></span>;
  } else if (level == 2) {
    return (
      <>
        <span className="bg-green-400 h-3.5 w-3.5 rounded-full mr-1.5"></span>
        <span className="bg-orange-300 h-3.5 w-3.5 rounded-full"></span>
      </>
    );
  } else {
    return (
      <>
        <span className="bg-green-400 h-3.5 w-3.5 rounded-full mr-1.5"></span>
        <span className="bg-orange-300 h-3.5 w-3.5 rounded-full"></span>
        <span className="bg-red-400 h-3.5 w-3.5 rounded-full ml-1.5"></span>
      </>
    );
  }
};

Guide.propTypes = {
  guide: PropTypes.object
};

export default Guide;
