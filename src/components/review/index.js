import React from 'react';
import PropTypes from 'prop-types';

const Review = (props) => {
  return (
    <div className="w-[300px] h-[450px] border-2 border-gray-200 rounded-2xl p-7 mr-7">
      <div className="h-[340px]">
        <p>{props.review.comment}</p>
      </div>
      <div className="flex items-center ">
        <img src={`${props.review.avatar}`} className="w-14 h-14 rounded-full"></img>
        <p className="text-lg font-semibold ml-3">{props.review.name}</p>
      </div>
    </div>
  );
};
Review.propTypes = {
  review: {
    comment: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string
  }
};

export default Review;
