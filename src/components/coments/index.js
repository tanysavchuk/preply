import React from 'react';
import PropTypes from 'prop-types';

const Coment = (props) => {
  return (
    <div className="w-[18%] border border-white rounded-2xl text-white p-7 mx-2">
      <div className="flex itens-center mb-2">
        <p className="text-lg font-medium mr-3">{props.coment.name}</p>
        <p className="text-lg font-medium">{props.coment.grade}</p>
      </div>
      <p className="mb-2 text-sm">{props.coment.date}</p>
      <p className="text-sm">{props.coment.review}</p>
    </div>
  );
};
Coment.propTypes = {
  coment: {
    name: PropTypes.string,
    grade: PropTypes.string,
    date: PropTypes.string,
    review: PropTypes.string
  }
};
export default Coment;
