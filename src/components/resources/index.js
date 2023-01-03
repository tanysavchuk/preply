import React from 'react';
import PropTypes from 'prop-types';

const Resource = (props) => {
  return (
    <div
      className={`py-5  h-[500px] w-[31%] ${props.smMarginBottom} ${props.mdMarginBottom} ${props.width} ${props.smWidthFull} ${props.mdWidth} `}>
      <a href={props.resource.link}>
        <div className="">
          <img src={props.resource.img} className="rounded-2xl w-full aspect-[1.77777778]"></img>
        </div>
        <div className="flex items-center justify-between my-5">
          <span className="bg-sky-200 text-gray-500 px-3 py-0.5 rounded-xl ">English</span>
          <div>
            <p className="text-gray-500">{props.resource.date}</p>
          </div>
        </div>
        <h3 className="text-xl  text-gray-600 font-semibold  my-5">{props.resource.titel}</h3>
        <p>
          Article by <span className="text-cyan-600"> {props.resource.autor}</span>
        </p>
      </a>
    </div>
  );
};
Resource.propTypes = {
  resource: PropTypes.object,
  width: PropTypes.string,
  smWidthFull: PropTypes.string,
  mdWidth: PropTypes.string,
  smMarginBottom: PropTypes.string,
  mdMarginBottom: PropTypes.string
};
export default Resource;
