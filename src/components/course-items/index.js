import React from 'react';
import PropTypes from 'prop-types';
import { faCircle, faShield, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CourseItem = (props) => {
  return (
    <div className="border border-gray-300 rounded-xl w-[380px] my-4">
      <div className="h-[212px] border-b border-gray-600 shadow-[inset_0px_-15px_10px_-3px_rgba(0,0,0,0.15)] ">
        <img
          src={`${props.courseItem.baner}`}
          className=" h-[212px] w-full rounded-t-xl object-cover relative -z-10"></img>
        <div className="bg-white border border-black rounded-md w-max px-4  text-center relative -top-4 left-5">
          {props.courseItem.level}
        </div>
      </div>
      <div className=" p-4">
        <h2 className="text-xl font-semibold mx-3 h-[84px] mb-3">{props.courseItem.title}</h2>
        <div className="flex items-center mb-5 ">
          <div className="border border-gray-300 rounded-md px-1 mx-3">
            {props.courseItem.timetable1}
          </div>
          <div className="border border-gray-300 rounded-md px-1">
            {props.courseItem.timetable2}
          </div>
        </div>
        <div className="flex items-center ">
          <div className="h-10 w-10 mx-4">
            <img src={`${props.courseItem.avatar}`} className="h-10 w-10 rounded-full"></img>
          </div>
          <div className="">
            <div className="flex items-center">
              <p className="font-semibold">{props.courseItem.name}</p>
              <FontAwesomeIcon icon={faShield} className="text-cyan-700 ml-2" />
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
              <span className="font-semibold ml-1">{props.courseItem.rating} </span>
              <FontAwesomeIcon icon={faCircle} className="text-[3px] text-gray-500 mx-2" />
              <p className="text-gray-600">{props.courseItem.classesTaught}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="  border-t border-gray-300 text-end pr-3 mb-1 h-16">
        <p className="text-gray-500 my-1"> From</p>
        <p>
          <span className="font-semibold text-lg"> {props.courseItem.price}</span> /class
        </p>
      </div>
    </div>
  );
};

CourseItem.propTypes = {
  courseItem: PropTypes.object
};
export default CourseItem;
