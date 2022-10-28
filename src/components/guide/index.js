import React from 'react';
import PropTypes from 'prop-types';

const Guide = (props) => {
  return (
    <div className="bg-white rounded-3xl p-5 hover:shadow-lg transition-shadow  h-44 ">
      <a href="">
        <h3 className="font-semibold text-lg">
          {props.guide.title}{' '}
          <span className="text-gray-500 font-light pl-1.5"> {props.guide.topicsCount} </span>
        </h3>
        <p className="text-gray-500 font-light my-3">{props.guide.description}</p>
        <div className="flex items-center">
          {/* {props.guide.level} */}
          <span className="bg-green-400 h-3.5 w-3.5 rounded-full mr-1.5"></span>
          <span className="bg-orange-300 h-3.5 w-3.5 rounded-full"></span>
          <span className="bg-red-400 h-3.5 w-3.5 rounded-full ml-1.5"></span>
        </div>
      </a>
    </div>
  );
};

Guide.propTypes = {
  guide: PropTypes.object
};

export default Guide;
