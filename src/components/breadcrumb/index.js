import React from 'react';
import PropTypes from 'prop-types';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const BreadCrumb = (props) => {
  const className = props.isSelected ? '' : 'text-cyan-500 ';
  return (
    <div className="flex items-center  ">
      {props.isSelected ? (
        <>{props.namePage}</>
      ) : (
        <>
          <Link to={props.link} className={`${className} `}>
            {props.namePage}
          </Link>
          <FontAwesomeIcon icon={faAngleRight} className="text-gray-300 sm:px-2 2xl:px-4" />
        </>
      )}
    </div>
  );
};

BreadCrumb.propTypes = {
  namePage: PropTypes.string,
  link: PropTypes.string,
  isSelected: PropTypes.bool,
  textColor: PropTypes.string
};

export default BreadCrumb;
