import React from 'react';
import {
  faAngleDown,
  faAngleRight,
  faArrowRightToBracket,
  faArrowUp,
  faBars,
  faBookmark,
  faBookOpen,
  faCaretDown,
  faCirclePlay,
  faCircleQuestion,
  faCopy,
  faGraduationCap,
  faPenToSquare,
  faQuestion,
  faStar,
  faUser,
  faUsers,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import Guide from '../../components/guide';
import Coment from '../../components/coments';
import Resource from '../../components/resources';
import Button from '../../components/button';
import { guides } from '../../mocks/guides';
import { coments } from '../../mocks/coments';
import { resources } from '../../mocks/resources';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Main() {
  return (
    <>
      <div>
        <div className=" sm: visible lg:invisible lg:h-0">
          <div className="flex justify-between w-full sm:px-5 py-5">
            <div className=" ">
              <a href="" className="text-4xl font-bold">
                preply
              </a>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="text-gray-400  font-extralight 2xl:text-2xl sm:text-lg  mr-10"
              />
              <FontAwesomeIcon
                icon={faBars}
                className="text-gray-400  font-extralight 2xl:text-2xl sm:text-lg "
              />
            </div>
          </div>
        </div>
        <div className=" xl:px-10  lg:px-5  sm:h-0  sm:w-0 sm:overflow-hidden lg:overflow-visible lg:h-20 lg:w-full">
          <div className=" flex items-center justify-between py-5 ">
            <div className=" flex items-center">
              <div className=" border-r-2 border-slate-200 pr-6">
                <a href="" className="text-4xl font-bold">
                  preply
                </a>
              </div>
              <div className=" flex items-center  text-gray-700  lg:ml-10 2xl:text-lg xl:text-sm md:text-xs sm:ml-3 ">
                <div className="">
                  <a href="">
                    <p>Find tutors New</p>
                  </a>
                </div>
                <a href="">
                  <div className="xl:mx-5 sm:mx-2  flex items-center">
                    <p>Group Classes </p>
                    <p className="lg:text-white lg:text-sm lg:font-semibold lg:bg-pink-500  lg:px-2  lg:py-0.5 rounded-full lg:text-xs ">
                      New
                    </p>
                  </div>
                </a>
                <div>
                  <a href="">
                    <p>Corporate training</p>
                  </a>
                </div>
                <div className="xl:mx-5 sm:mx-2  ">
                  <a href="">
                    <p>Become a tutor</p>
                  </a>
                </div>
              </div>
            </div>
            <div className=" flex items-center text-gray-700  ">
              <div>
                <button className="border border-gray-300 text-emerald-500 py-0.5 px-6 text-md rounded-md 2xl:text-lg 2xl:text-sm md:text-xs sm:px-3">
                  Refer a friend
                </button>
              </div>
              <div className="border-r-2 border-slate-300 2xl:px-8 2xl:text-lg 2xl:text-sm md:text-xs sm:px-4">
                <a href="">
                  <p>
                    English,UAH
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="text-gray-500  font-extralight text-sm  pl-0.5"
                    />
                  </p>
                </a>
              </div>
              <div className="2xl:px-8  sm:px-4">
                <a href="">
                  <FontAwesomeIcon
                    icon={faCircleQuestion}
                    className="text-gray-400  font-extralight 2xl:text-2xl sm:text-lg "
                  />
                </a>
              </div>
              <a href="">
                <div className="2xl:text-lg xl:text-sm md:text-xs flex flex items-center">
                  <FontAwesomeIcon
                    icon={faArrowRightToBracket}
                    className="text-gray-400  font-extralight 2xl:text-2xl mr-2  sm:text-lg"
                  />
                  <p>Log in </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className=" flex items-center  sm:text-sm lg:text-lg pb-7 pt-3  lg:px-10 sm:px-5 border-b border-gray-300 shadow-xl w-full">
          <div>
            <div className="flex items-center">
              <a href="">Learn English online</a>
              <a href="" className="lg:mx-8 sm:mx-5">
                Grammar
              </a>
              <a href="">Vocabulary</a>
              <a href="" className="lg:mx-8 sm:mx-5">
                Business English
              </a>
              <a href="">
                English Tests
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="text-gray-800 lg:text-xl pl-1.5 sm:text-lg"
                />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="bg-cyan-200 flex justify-center h-16 p-3 w-full">
          <div className="flex  w-full">
            <div className=" flex items-center w-3/5 justify-end pr-10">
              <div className="mr-7">
                <a href="" className="text-cyan-800 font-semibold text-[18px]">
                  Get 20% aff first lesson
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-cyan-800 text-lg font-semibold pl-1"
                  />
                </a>
                <p className="text-gray-600 text-sm">Use promo code at checkout</p>
              </div>
              <div className=" flex items-center  ">
                <p className="text-gray-600 text-base pr-1">Code:</p>
                <p className="text-cyan-800 font-semibold text-[18px]">LEARN20</p>
                <FontAwesomeIcon icon={faCopy} className="text-cyan-800 text-lg pl-2 pb-2" />
              </div>
            </div>
            <div className="  pr-7 w-2/5 flex justify-end">
              <FontAwesomeIcon icon={faXmark} className="text-cyan-800 text-xl p-2" />
            </div>
          </div>
        </div> */}
        <div className="flex justify-center">
          <div className="">
            <div className="bg-rose-50 flex justify-center ">
              <div className="w-[75%] px-5">
                <div className="">
                  <div className="flex items-center py-5">
                    <a href="" className="text-cyan-500 ">
                      Preply{' '}
                    </a>
                    <a href="" className="text-cyan-500 px-3">
                      Learn a language
                    </a>
                    <a href="" className="text-cyan-500 pr-3">
                      {' '}
                      Learn English online{' '}
                    </a>
                    <p> English Grammar</p>
                  </div>

                  <h1 className="text-4xl font-semibold my-10 text-gray-800">
                    Learn English grammar for free
                  </h1>
                  <p className="text-xl text-gray-700 leading-8 mb-10">
                    There’s no denying it: English has a lot of grammatical rules to study. But many
                    students find working through the mechanics of English strangely rewarding. New
                    languages always seem chaotic at first — mastering grammar brings them into
                    order. It also opens up access to the more creative and interesting parts of
                    learning English!
                    <a href="" className=" text-cyan-600 px-1.5">
                      Learn English
                    </a>
                    the most effective way and reach your language goals faster: take
                    <a href="" className=" text-cyan-600 px-1.5">
                      private English lessons
                    </a>
                    or
                    <a href="" className=" text-cyan-600 px-1.5">
                      online English grup classes
                    </a>
                    from the comfort of your own home!
                  </p>
                  <div className="flex items-center">
                    <div className="bg-black h-10 w-10 rounded-lg mr-5 flex items-center justify-center">
                      <FontAwesomeIcon icon={faBookOpen} className="text-white text-lg" />
                    </div>
                    <h2 className="text-3xl font-medium text-gray-900">
                      English Grammar reference{' '}
                    </h2>
                  </div>

                  <p className="text-xl text-gray-700 leading-8 my-10 ">
                    Here are how-to guides for every type of word you will find when you learn
                    English grammar. Check out the dedicated categories:
                  </p>
                </div>

                <div className=" flex flex-wrap  ">
                  {guides.map((guide) => (
                    <Guide key={guide.title} guide={guide} />
                  ))}
                </div>

                <h2 className="text-center text-3xl font-semibold text-gray-900 my-12">
                  How do you want to learn English online?
                </h2>
                <div className="flex  items-center justify-between ">
                  <div className=" flex items-center bg-white rounded-3xl  px-5 py-10 mr-5 h-[245px] w-1/2">
                    <div>
                      <img src="https://static.preply.com/static/ssr/_next/static/images/group-lesson-214751898aee91e1cbb355a14ea70f84.png"></img>
                    </div>
                    <div className="pl-7">
                      <h3 className="text-2xl text-gray-700 font-semibold pb-3">
                        Learn English in small groups
                      </h3>
                      <p className="text-lg">
                        {' '}
                        Practice and improve in structured classes with 4-5 other students
                      </p>
                      <Button
                        icon={
                          <FontAwesomeIcon icon={faUsers} className="text-white text-lg pr-2" />
                        }
                        title={'Join group classes'}
                      />
                    </div>
                  </div>
                  <div className=" flex items-center bg-white rounded-3xl   px-5 py-10 ml-5 h-[245px] w-1/2">
                    <div>
                      <img src="https://static.preply.com/static/ssr/_next/static/images/private-lesson-e2097b110d8f1d2cfc2c256d3ae7c455.png"></img>
                    </div>
                    <div className="pl-7">
                      <h3 className="text-2xl text-gray-700 font-semibold pb-3">
                        Improve faster with 1-on-1 lessons
                      </h3>
                      <p className="text-lg">
                        Ready to speak English? Check out our tutors and start with a native English
                        speaker.
                      </p>
                      <Button
                        icon={<FontAwesomeIcon icon={faUser} className="text-white text-sm pr-2" />}
                        title={'Take 1-on-1 lessons'}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between my-12 ">
                  <div className="flex items-center ">
                    <div className="bg-black h-10 w-10 rounded-lg mr-5 flex justify-center items-center">
                      <FontAwesomeIcon icon={faGraduationCap} className="text-white text-lg" />
                    </div>
                    <h3 className="text-3xl font-medium text-gray-900">Free Grammar resources</h3>
                  </div>
                  <button className="text-cyan-700 hover:bg-sky-100 px-5 py-3 rounded-xl">
                    {' '}
                    More articles
                  </button>
                </div>
                <div className=" flex flex-wrap justify-between">
                  {resources.map((resource) => (
                    <Resource key={resource.img} resource={resource} />
                  ))}
                </div>

                <div className="flex items-center justify-between my-12">
                  <div className="flex items-center">
                    <div className="bg-black h-10 w-10 rounded-lg mr-5 flex justify-center items-center">
                      <FontAwesomeIcon icon={faCirclePlay} className="text-white text-lg" />
                    </div>
                    <h3 className="text-3xl font-medium text-gray-900">
                      Videos about English grammar
                    </h3>
                  </div>
                  <button className="text-cyan-700 hover:bg-sky-100 px-5 py-3 rounded-xl">
                    More videos{' '}
                  </button>
                </div>
                <div className="flex items-center mb-20 ">
                  <div className="w-1/3">
                    <div className="w-full h-full">
                      <iframe
                        className="rounded-2xl aspect-video "
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/7kISZovT7Yw"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                    </div>
                  </div>
                  <div className="w-1/3  mx-7">
                    <div className="w-full h-full">
                      <iframe
                        className="rounded-2xl aspect-video"
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/WIuHvJd5Xsg"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <div className="w-full h-full">
                      <iframe
                        className="rounded-2xl aspect-video"
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/NHlqJQlfjPs"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-300 flex justify-between rounded-2xl">
                  <div className="mx-7">
                    <h4 className="text-3xl  mt-7 mb-5">Test your English vocabulary</h4>
                    <p className=" mb-7 text-lg">
                      How many words do you know? Get an estimate in minutes with this simple test.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button className="bg-white rounded-xl py-4 px-7 mr-7 cursor-pointer">
                      Test my Vocab
                    </button>
                  </div>
                </div>

                <div className="flex items-center my-12">
                  <div className="bg-black h-10 w-10 rounded-lg mr-5 flex justify-center items-center">
                    <FontAwesomeIcon icon={faUser} className="text-white text-lg" />
                  </div>
                  <h3 className="text-3xl font-medium text-gray-900">English topics</h3>
                </div>
                <div className="flex ">
                  <div className="w-1/2">
                    <a href="">
                      <div className="bg-white rounded-2xl flex items-center justify-between p-5 h-40 ">
                        <img
                          src="https://s3-eu-west-1.amazonaws.com/tf-tutor-avatars-prod/6842d0/ejsxlxe7pid_speaking.svg"
                          className="h-28"></img>
                        <div className="mr-28">
                          <h4 className="font-semibold text-xl text-gray-700">Speaking practice</h4>
                          <p className=" pt-3">Develop fluency with everyday conversation topics</p>
                        </div>
                        <button className="bg-sky-200 h-12 w-12 rounded-xl "> </button>
                      </div>
                    </a>
                    <a href="">
                      <div className="bg-white rounded-2xl flex items-center mt-7 p-5 justify-between h-40">
                        <img src="https://s3-eu-west-1.amazonaws.com/tf-tutor-avatars-prod/632b2a/egzizkuufua_vocabulary.svg"></img>
                        <div className="mx-7">
                          <h4 className="font-semibold text-xl text-gray-700">
                            Expand your vocabulary{' '}
                          </h4>
                          <p className=" pt-3">
                            {' '}
                            Learn practical words for everyday use and specialized topics
                          </p>
                        </div>
                        <button className="bg-sky-200 h-12 w-12 rounded-xl "> </button>
                      </div>
                    </a>
                  </div>
                  <div className=" ml-7 w-1/2 ">
                    <a href="">
                      <div className="bg-white rounded-2xl flex items-center  justify-between p-5  h-40">
                        <img
                          src="https://s3-eu-west-1.amazonaws.com/tf-tutor-avatars-prod/cba140/z4ejyu3l3m_business.svg"
                          className="h-28"></img>
                        <div className="">
                          <h4 className="font-semibold text-xl text-gray-700">
                            Master business English{' '}
                          </h4>
                          <p className=" pt-2 ">
                            {' '}
                            Learning Business English for your career pays off - literally!
                          </p>
                        </div>
                        <button className="bg-sky-200 h-12 w-12 rounded-xl "> </button>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="flex items-center mt-16">
                  <div className="bg-black h-10 w-10 rounded-lg mr-5 flex justify-center items-center">
                    <FontAwesomeIcon icon={faStar} className="text-white text-lg" />
                  </div>
                  <h3 className="text-3xl font-medium text-gray-900">Preply in the press</h3>
                </div>
                <p className="text-xl my-7">
                  Top publications love to feature Preply’s approach to language learning
                </p>

                <div className="flex w-full">
                  <div className="bg-white w-1/5 h-28 border border-black rounded-2xl "></div>
                  <div className="bg-white w-1/5 mx-12  h-28 border border-black rounded-2xl "></div>
                  <div className="bg-white w-1/5 h-28 border border-black rounded-2xl "></div>
                  <div className="bg-white w-1/5 mx-12  h-28 border border-black rounded-2xl "></div>
                  <div className="bg-white w-1/5 h-28 border border-black rounded-2xl "></div>
                </div>
                <div className="flex mt-7">
                  <div className="bg-white w-1/5 h-28 border border-black rounded-2xl "></div>
                  <div className="bg-white w-1/5 h-28 mx-12 border border-black rounded-2xl "></div>
                  <div className="bg-white w-1/5 h-28 border border-black rounded-2xl "></div>
                  <div className="bg-white w-1/5 h-28 mx-12 border border-black rounded-2xl  "></div>
                  <div className="bg-white w-1/5 h-28 border border-black rounded-2xl "></div>
                </div>
              </div>
            </div>
            <div className="bg-black-img w-full flex justify-center bg-rose-50 pb-52 ">
              <div className="  w-[75%] ">
                <div className="flex items-center mt-32 mb-16">
                  <div className="h-10 w-10 bg-white rounded-lg flex justify-center items-center">
                    <FontAwesomeIcon icon={faPenToSquare} className="text-black text-lg" />
                  </div>
                  <h3 className="text-white text-5xl font-semibold ml-10">What our users say</h3>
                </div>
                <div className="flex flex-wrap justify-between ">
                  {coments.map((coment, index) => (
                    <Coment key={`${coment.name} ${index}`} coment={coment} />
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-rose-50 flex justify-center">
              <div className="w-[75%] ">
                <div className="flex items-center pt-16">
                  <div className="bg-black h-10 w-10 rounded-lg mr-5 flex justify-center items-center">
                    <FontAwesomeIcon icon={faBookmark} className="text-white text-lg" />
                  </div>
                  <h3 className="text-3xl font-medium text-gray-900">Frequently asked questions</h3>
                </div>
                <p className="my-10 text-xl">
                  Here are some of the most frequently asked questions about English Grammar.
                </p>
                <div className="bg-white flex items-center justify-between py-14 px-8 rounded-2xl">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-cyan-600"></div>
                    <p className="ml-5 text-2xl">How can i learn English grammar easily?</p>
                  </div>
                  <div></div>
                </div>
                <div className="bg-white flex items-center justify-between py-14 px-8 rounded-2xl mt-5">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-cyan-600"></div>
                    <p className="ml-5 text-2xl">How can i learn English grammar easily?</p>
                  </div>
                  <div></div>
                </div>
                <div
                  className="
              flex items-center mt-20 mb-24 ">
                  <div>
                    <p className="pb-3">Learn another language:</p>
                    <ul className="text-cyan-600  leading-7">
                      <li>
                        <a href="">Learn German</a>
                      </li>
                      <li>
                        <a href="">Learn Spanish</a>
                      </li>
                      <li>
                        <a href="">Learn Japanese</a>
                      </li>
                      <li>
                        <a href="">Learn English</a>
                      </li>
                      <li>
                        <a href="">Learn French</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mx-10">
                    <p className="pb-3">Choose online group classes:</p>
                    <ul className="text-cyan-600  leading-7">
                      <li>
                        <a href="">Learn German</a>
                      </li>
                      <li>
                        <a href="">Learn Spanish</a>
                      </li>
                      <li>
                        <a href="">Learn Japanese</a>
                      </li>
                      <li>
                        <a href="">Learn English</a>
                      </li>
                      <li>
                        <a href="">Learn French</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="pb-3">Find a tutor online:</p>
                    <ul className="text-cyan-600  leading-7">
                      <li>
                        <a href="">Learn German</a>
                      </li>
                      <li>
                        <a href="">Learn Spanish</a>
                      </li>
                      <li>
                        <a href="">Learn Japanese</a>
                      </li>
                      <li>
                        <a href="">Learn English</a>
                      </li>
                      <li>
                        <a href="">Learn French</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 flex justify-center">
              <div className="w-[75%]  ">
                <div className="flex mt-20 pb-20 border-b-2 border-gray-500">
                  <div className="text-white w-1/4 ">
                    <p className="pb-2">ABOUT US</p>
                    <ul>
                      <li>
                        <a href="">Who we are</a>
                      </li>
                      <li>
                        <a href="">How it works</a>
                      </li>
                      <li>
                        <a href="">Preply reviews</a>
                      </li>
                      <li>
                        <a href="">Work at Preply!</a>
                      </li>
                      <li>
                        <a href="">Preply Global</a>
                      </li>
                      <li>
                        <a href="">Status</a>
                      </li>
                      <li>
                        <a href="">Preply Live</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mx-20 text-white w-1/4">
                    <p className="pb-2">FOR STUDENTS</p>
                    <ul>
                      <li>
                        <a href="">Who we are</a>
                      </li>
                      <li>
                        <a href="">How it works</a>
                      </li>
                      <li>
                        <a href="">Preply reviews</a>
                      </li>
                      <li>
                        <a href="">Work at Preply!</a>
                      </li>
                      <li>
                        <a href="">Preply Global</a>
                      </li>
                      <li>
                        <a href="">Status</a>
                      </li>
                      <li>
                        <a href="">Preply Live</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mr-20 text-white w-1/4">
                    <p className="pb-2">FOR STUDENTS</p>
                    <ul>
                      <li>
                        <a href="">Who we are</a>
                      </li>
                      <li>
                        <a href="">How it works</a>
                      </li>
                      <li>
                        <a href="">Preply reviews</a>
                      </li>
                      <li>
                        <a href="">Work at Preply!</a>
                      </li>
                      <li>
                        <a href="">Preply Global</a>
                      </li>
                      <li>
                        <a href="">Status</a>
                      </li>
                      <li>
                        <a href="">Preply Live</a>
                      </li>
                    </ul>
                  </div>
                  <div className="text-white w-1/4">
                    <p className="pb-2">FOR STUDENTS</p>
                    <ul>
                      <li>
                        <a href="">Who we are</a>
                      </li>
                      <li>
                        <a href="">How it works</a>
                      </li>
                      <li>
                        <a href="">Preply reviews</a>
                      </li>
                      <li>
                        <a href="">Work at Preply!</a>
                      </li>
                      <li>
                        <a href="">Preply Global</a>
                      </li>
                      <li>
                        <a href="">Status</a>
                      </li>
                      <li>
                        <a href="">Preply Live</a>
                      </li>
                      <li>
                        <a href="">Work at Preply!</a>
                      </li>
                      <li>
                        <a href="">Preply Global</a>
                      </li>
                      <li>
                        <a href="">Status</a>
                      </li>
                      <li>
                        <a href="">Preply Live</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex text-white pt-20 mb-20">
                  <div className=" w-1/4">
                    <p className="pb-2 text-lg">Support</p>
                    <ul>
                      <li>
                        <a href="">Need any help?</a>
                      </li>
                    </ul>
                  </div>
                  <div className=" w-1/4 mx-20">
                    <p className="pb-2 text-lg">Contacts</p>
                    <ul>
                      <li>USA 1309 Beacon Street, Suite 300, Brookline, MA, 02446</li>
                    </ul>
                  </div>
                  <div className=" w-1/4 mr-20">
                    <p className="pb-2 text-lg">Preply social</p>
                    <ul>
                      <li>
                        <a href="">Facebook</a>
                      </li>
                      <li>
                        <a href="">Instagram</a>
                      </li>
                      <li>
                        <a href="">YouTube</a>
                      </li>
                    </ul>
                  </div>
                  <div className=" w-1/4">
                    <p className="pb-2 text-lg"> Apps</p>
                    <div className="bg-black h-10 w-28 rounded-lg border border-white mb-3 "></div>
                    <div className="bg-black h-10 w-32 rounded-lg border border-white "></div>
                  </div>
                </div>
              </div>
              <div className=" h-0 w-0 ">
                <div className="flex justify-center items-center bg-cyan-500 xl:h-16 xl:w-16 rounded-full  relative xl:bottom-8 left-32 sm:left-24 sm:h-12 sm:w-12 sm:bottom-6 ">
                  <FontAwesomeIcon icon={faArrowUp} className="text-black xl:text-2xl sm:text-lg" />
                </div>
              </div>
            </div>
            <div className="flex  justify-center bg-gray-800 pt-20 pb-16">
              <div className="w-4/6 ">
                <div className="flex">
                  <div className=" text-white w-1/4">
                    <p className="pb-2">LEARN</p>
                    <ul className="text-sm">
                      <li>
                        <a href="">
                          Learn English online <span className="pl-3">Learn Spanish onlinee</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          Learn French online <span className="pl-3">Learn German online</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          Learn Italian online <span className="pl-3">Learn another language</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mx-20 text-white w-1/4">
                    <p className="pb-2">GROUP CLASSES</p>
                    <ul className="text-sm">
                      <li>
                        <a href="">Online English classes</a>
                      </li>
                      <li>
                        <a href="">Online Spanish classes</a>
                      </li>
                      <li>
                        <a href="">Online French classes</a>
                      </li>
                      <li>
                        <a href="">Online English classes</a>
                      </li>
                      <li>
                        <a href="">Online Spanish classes</a>
                      </li>
                      <li>
                        <a href="">Online French classes</a>
                      </li>
                      <li>
                        <a href="">Online English classes</a>
                      </li>
                      <li>
                        <a href="">Online Spanish classes</a>
                      </li>
                      <li>
                        <a href="">Online French classes</a>
                      </li>
                      <li>
                        <a href="">Online French classes</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mr-20 text-white w-1/4">
                    <p className="pb-2">1-ON-1 TUTORS</p>
                    <ul className="text-sm">
                      <li>
                        <a href="">
                          English Tutors
                          <span className="pl-2">Spanish Tutors</span>{' '}
                          <span className="pl-2">Spanish Tutors</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          German Tutors
                          <span className="pl-2">Arabic Tutors</span>{' '}
                          <span className="pl-2">Math Tutors</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className=" text-white w-1/4">
                    <p className="pb-2">TUTORS NEAR YOU</p>
                    <ul className="text-sm">
                      <li>
                        <a href="">
                          Tutors in NYC <span className="pl-3">Tutors in Los Angeles</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          Tutors in Toronto <span className="pl-3">Tutors in London</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          Tutors in Sydney <span className="pl-3">Tutors abroad</span>
                        </a>
                      </li>
                      <li>
                        <a href="">Online Spanish classes</a>
                      </li>
                      <li>
                        <a href="">Online French classes</a>
                      </li>
                      <li>
                        <a href="">Online English classes</a>
                      </li>
                      <li>
                        <a href="">Online Spanish classes</a>
                      </li>
                      <li>
                        <a href="">Online French classes</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-white text-sm  flex items-cente mt-16 ">
                  <div className="mr-64">
                    <ul>
                      <li>&copy; 2012-2022 Preply Inc. </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Legal Center &middot; Privacy Policy &middot; Cookie Policy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center bg-cyan-500 xl:h-16 xl:w-16 rounded-full  fixed bottom-6  right-8  sm:h-12 sm:w-12  ">
            <FontAwesomeIcon icon={faQuestion} className="text-black xl:text-2xl sm:text-lg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
