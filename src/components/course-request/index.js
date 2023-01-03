import React from 'react';

import Button from '../../components/button';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const CourseRequest = () => {
  return (
    <div className="text-center mt-12 py-5">
      <FontAwesomeIcon icon={faSearch} className="text-4xl text-gray-400" />
      <h2 className="my-5 text-xl font-semibold "> Don`t see the right course for you?</h2>
      <p className="text-lg text-gray-500 mb-7">
        Let us know what you`re looking for! We regularly add new courses based on our
        students`needs
      </p>
      <Button title={'Request a course'} fontSize={'text-lg'} />
    </div>
  );
};

export default CourseRequest;
