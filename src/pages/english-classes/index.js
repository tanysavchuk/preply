import React from 'react';
import {
  faCircleQuestion,
  faArrowRightToBracket,
  faCirclePlay,
  faAngleRight,
  faAngleLeft
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LanguagesSelect from '../../components/languages-select';
import EnglishLevel from '../../components/checkbox-english-level';
import CheckboxTopic from '../../components/checkbox-topic';
import CheckboxDay from '../../components/checkbox-day';
import CheckboxTime from '../../components/checkbox-time';
import InputPrise from '../../components/input-prise';
import CheckboxFormat from '../../components/checkbox-format';
import SortPrice from '../../components/sort-price';
import CourseItem from '../../components/course-items';
import CourseRequest from '../../components/course-request';
import Review from '../../components/review';
import { courseItem } from '../../mocks/course-item';
import { review } from '../../mocks/review';

function EnglishClasses() {
  return (
    <>
      <div className="flex justify-center w-full mt-5 h-14">
        <div className="flex justify-between items-center w-[95%]">
          <div className="flex items-center">
            <div>
              <img
                src="https://preply.com/wp-content/themes/preply-blog-v2.0/assets/img/logo.svg"
                alt=""
              />
            </div>
            <div className="ml-7">
              <a href="#" className="mr-7 text-lg font-semibold text-gray-700">
                Find private tutors
              </a>
              <a
                href="#"
                className=" text-lg font-semibold text-cyan-500 border-b-2 border-cyan-500 pb-4 ">
                Find courses
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <LanguagesSelect textColor="text-gray-800" fontWeight="font-medium" />
            <FontAwesomeIcon icon={faCircleQuestion} className="mx-5 text-xl text-gray-600" />
            <div>
              <FontAwesomeIcon icon={faArrowRightToBracket} className="text-2xl text-gray-600" />
              <a href="#" className="ml-3 text-gray-800 ">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 w-full flex justify-center mt-10">
        <div className="flex justify-between w-9/12">
          <div className="w-1/2 pr-16">
            <div className="flex items-center">
              <a href="#" className="text-cyan-600 font-semibold">
                Preply
              </a>
              <span className="mx-1 text-lg text-gray-500"> / </span>
              <p className="text-gray-500"> Online English classes </p>
            </div>
            <h1 className="my-5 text-4xl font-semibold">Online English classes that work</h1>
            <p className="text-lg text-gray-500">
              Learn, speak and connect with a small group of students, guided by an expert tutor
            </p>
            <button className="my-5 text-lg text-cyan-700 ">
              <FontAwesomeIcon icon={faCirclePlay} className="pr-3 " />
              See how it works
            </button>
          </div>
          <div className="w-2/5">
            <img src="https://static.preply.com/static/ssr/_next/static/images/hero_image-a9fccf88d4e1edf9b05c33efaf9b7447.png" />
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className=" w-9/12">
          <div className=" flex w-full mt-10 mb-20">
            <>
              <EnglishLevel />
            </>
            <div className="mx-5">
              <CheckboxTopic />
            </div>
            <>
              <CheckboxDay />
            </>
            <div className="mx-5">
              <CheckboxTime />
            </div>
            <>
              <InputPrise />
            </>
            <div className="ml-5">
              <CheckboxFormat />
            </div>
          </div>
          <div className="flex justify-between">
            <p>123 courses</p>
            <>
              <SortPrice />
            </>
          </div>
          <div className="flex flex-wrap justify-between">
            {courseItem.map((courseItem, index) => (
              <CourseItem key={`${courseItem.baner} ${index}`} courseItem={courseItem} />
            ))}
          </div>
          <>
            <CourseRequest />
          </>
          <h2 className="text-center text-4xl font-semibold mb-10 mt-36 text-gray-700">
            Why our students love our classes
          </h2>
          <div className="p-8 w-full flex overflow-y-hidden">
            <div className="flex flex-nowrap">
              {review.map((review, index) => (
                <Review key={`${review.comment} ${index}`} review={review} />
              ))}
            </div>
          </div>
          <div className="flex justify-center items-centr">
            <button
              className=" flex items-center justify-center h-14 w-14 border-[3px] 
            border-gray-300 focus:border-cyan-600 rounded-full  text-gray-300 focus:text-cyan-600 mr-2">
              <FontAwesomeIcon icon={faAngleLeft} className="text-2xl font-semibold " />
            </button>
            <button
              className="  flex items-center justify-center h-14 w-14 border-[3px]
             border-gray-300 focus:border-cyan-600 rounded-full  text-gray-300 focus:text-cyan-600 ml-2">
              <FontAwesomeIcon icon={faAngleRight} className="text-2xl font-semibold " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default EnglishClasses;
