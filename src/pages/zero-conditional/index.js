import React, { useState, useRef, useEffect } from 'react';
import Button from '../../components/button';
import BreadCrumb from '../../components/breadcrumb';
import RuleStructure from '../../components/rule-structure';
import FixBox from '../../components/fix-box';
import CtaBanner from '../../components/cta-banner';
import FooterColumn from '../../components/footer-column';
import DropDowmColumn from '../../components/drop-down-columns';
import MobileMenu from '../../components/mobile-menu';
import InputSearch from '../../components/search';
import LanguagesSelect from '../../components/languages-select';

import { rules } from '../../mocks/rules';
import { footerColumns } from '../../mocks/footer-columns';

import {
  faAngleDown,
  faBookOpen,
  faCalendar,
  faCaretDown,
  faCircle,
  faMagnifyingGlass,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Resource from '../../components/resources';
import { resources } from '../../mocks/resources';
import { useNavigate } from 'react-router-dom';
const maskVisibleClass = 'w-full h-full';
const maskInvisibleClass = 'w-0 h-0';

const visible = 'z-10 bg-white relative';

function ZeroConditional() {
  const navigate = useNavigate();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const previousArticle = Array(resources[6], resources[1]);

  const SimilarArticles = resources.filter((value, index) => {
    return index !== 0 && index !== 6;
  });

  const handleOpenMobileMenu = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleJoinGroupClassesButtonClick = () => {
    console.log('handleJoinGroupClassesButtonClick');
    navigate('http://localhost:3000/english-classes');
  };

  return (
    <>
      <FixBox
        imgLogo={'https://preply.com/wp-content/uploads/2022/06/Preply_Logo_White-1.png'}
        title="Let’s get you talking. Choose from 32,000+ tutors in 50 languages"
      />
      <div className={`flex justify-center sm:pt-2  ${isPopoverOpen ? visible : ''}`}>
        <div className="flex items-center sm:w-[95%] h-14 sm:overflow-visible lg:w-0 lg:h-0 lg:overflow-hidden">
          <div>
            <img src="https://preply.com/wp-content/themes/preply-blog-v2.0/assets/img/logo.svg"></img>
          </div>
          <MobileMenu onOpenMobileMenu={handleOpenMobileMenu} />
        </div>
        <div className="flex justify-between items-center lg:w-[95%] lg:overflow-visible lg:h-14 sm:overflow-hidden sm:w-0  sm:h-0">
          <div>
            <img
              src="https://preply.com/wp-content/themes/preply-blog-v2.0/assets/img/logo.svg"
              className="h-12"></img>
          </div>
          <div className="  sm:text-xs xl:text-base text-gray-600 flex justify-between items-center">
            <a href="#" className="sm:mx-5 xl:mx-10">
              Blog
            </a>
            <a href="#" className=" ">
              Language resources
            </a>
            <a href="#" className="sm:mx-5 xl:mx-10">
              Articles for business
            </a>
          </div>
          <div className="flex items-center ">
            <Button
              title={'Find 1-on-1 tutors'}
              borderRadius={'rounded-3xl'}
              height={'h-12'}
              textMediaSM={'sm:text-xs'}
              textMediaXL={'2xl:text-base'}
              hoverBgColog={'hover:bg-cyan-500'}
              marginRight={'mr-5'}
            />
            <Button
              title={'Join group classes'}
              borderRadius={'rounded-3xl'}
              height={'h-12'}
              textMediaSM={'sm:text-xs'}
              textMediaXL={'2xl:text-base'}
              hoverBgColog={'hover:bg-cyan-500'}
            />
          </div>
          <div className=" ">
            <LanguagesSelect
              borderRight={' border-r-2 '}
              borderColor={'border-slate-200'}
              MediapaddingX={'xl:px-5'}
              textMediaSM={'sm:text-xs'}
              widthMediaLg={'lg:w-[75px]'}
              widthMediaXl={' xl:w-[114px]'}
              marginRight={'mr-5'}
              widthPopover={'w-36'}
              backgroundPopover={'bg-white'}
              textColorHover={'hover:text-cyan-600'}
              textAlign={'text-center'}
            />
          </div>
          <div>
            <InputSearch />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center 2xl:w-2/5 xl:w-3/5 sm:w-full  px-5">
          <div className=" w-full">
            <div className="flex items-center justify-center md:mt-20  w-full sm:text-xs sm:overflow-hidden sm:h-0 md:h-4 sm:mt-0  md:overflow-visible">
              <BreadCrumb link="#" namePage={'Preply Blog'} />
              <BreadCrumb link="#" namePage={'English'} />
              <BreadCrumb link="#" namePage={'English grammar'} />
              <BreadCrumb link="#" namePage={'Sentences'} />
              <BreadCrumb link="#" namePage={'Zero condition...'} isSelected={true} />
            </div>
            <h1 className=" text-center 2xl:text-5xl font-semibold my-10 sm:text-3xl ">
              Zero conditional in English: What it is and how to use it
            </h1>
            <div className="flex items-center justify-center text-gray-500 mb-10">
              <FontAwesomeIcon icon={faCalendar} className=" mr-2" />
              <p> March 10, 2022</p>
              <FontAwesomeIcon icon={faCircle} className="text-[5px] mx-2" />
              <p className="text-gray-600 font-semibold">Updated September 27, 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="flex justify-center relative ">
          <div className="2xl:w-2/5 lg:w-3/5 sm:w-full  px-5 lg:min-w-[900px]">
            <div className="w-full">
              <img src="https://preply.com/wp-content/uploads/2022/03/zero-conditional-min-scaled.jpg"></img>
            </div>
            <div className="flex items-center justify-between mt-10 mb-14 ">
              <img
                src="https://preply.com/wp-content/uploads/2021/01/Photo-Filson.jpg"
                className="h-16 rounded-xl"></img>
              <div className="flex items-center mr-24 ml-5">
                <p className="text-gray-500 text-sm">Article by:</p>
                <a href="" className="text-cyan-500 underline mr-10 pl-1 text-sm">
                  Nicollete Filson
                </a>
                <p className="text-cyan-500  py-1 text-center rounded-full bg-gray-50 text-sm  w-32">
                  Preply tutor
                </p>
              </div>
              <Button
                title={'Contact Nicollete Filson'}
                borderRadius={'rounded-2xl'}
                height={'h-12'}
                textMediaSM={'sm:text-xs'}
                fontWeight={'font-semibold'}
              />
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Mastering the grammar of any foreign language is not for the faint of heart. It
              requires a solid grasp of linguistic structures, a sound{' '}
              <a href="" className="text-cyan-500">
                language learning plan
              </a>
              , and a whole lot of dedication. So, if you’ve been struggling to grasp the concept of
              the zero conditional in English, you’re not alone.
            </p>
            <p className="text-gray-600 mb-10 text-lg">
              But don’t panic! This easy-to-understand guide will explain what the zero conditional
              is, present zero conditional examples in context, and provide zero conditional
              exercises for you to test what you’ve learned. Come on–it’s time to check one more
              English grammar structure off your list!
            </p>
            <h2 className="text-3xl font-semibold mb-8">Wait, what’s the conditional tense?</h2>
            <p className="text-gray-600 mb-5 text-lg">
              Before you can begin to understand what the zero conditional is, you must first get
              acquainted with the conditional tense itself. In English, the conditional tense is
              used{' '}
              <span className="text-gray-600 font-semibold">
                to express what could have, might, or will happen IF a certain action occurs or has
                occurred
              </span>
              .
            </p>
            <p className="text-gray-600 mb-5 text-lg">
              For example, mothers often say, “You can go play outside IF you eat the rest of your
              vegetables.” In this situation, something might happen (i.e., “you can go play
              outside”) IF a certain action occurs (i.e., “you eat the rest of your vegetables”).
            </p>
            <p className="text-gray-600 text-lg ">
              Overall, there are{' '}
              <a href="#" className="text-cyan-500">
                five main types of conditional sentences:
              </a>{' '}
              <a href="" className="text-cyan-500">
                zero conditional
              </a>
              ,
              <a href="" className="text-cyan-500">
                {' '}
                first conditional
              </a>
              ,{' '}
              <a href="" className="text-cyan-500">
                second conditional
              </a>
              ,{' '}
              <a href="" className="text-cyan-500">
                third conditional
              </a>
              , and mixed conditional. However, this article will help you get a grip on the zero
              conditional structure before you move on to the others.
            </p>
            <div className="bg-gray-800 my-12 rounded-3xl flex justify-between ">
              <div className="text-white w-[55%] pt-12 pb-8 pl-16 pr-10">
                <h3 className="text-2xl font-semibold mb-6">
                  <span className="font-medium pr-2">Get more tips to</span>
                  Learn English Grammar
                </h3>
                <p className="mb-6">
                  Improve your grammar with a full range of videos, articles and live lessons!
                </p>
                <a href="">
                  <Button
                    title={'Explore resources'}
                    hoverBgColog={'hover:bg-white'}
                    textColor={'hover:text-cyan-600'}
                  />
                </a>
              </div>
              <div className="w-[45%] overflow-hidden ">
                <img
                  src="https://preply.com/wp-content/themes/preply-blog-v2.0/assets/img/del/dynamic_cta_9.png"
                  className="rounded-3xl w-full"></img>
              </div>
            </div>
            <h2 className="text-3xl font-semibold ">What’s a zero conditional sentence?</h2>
            <div className="w-full h-[460px] border border-gray-800">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yebHWJKxR0Q"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <h3 className="text-2xl mt-16 mb-8">Usage & meaning</h3>
            <p className="text-gray-600  text-lg">
              Zero conditional sentences are{' '}
              <span className="font-semibold text-gray-500">used to describe general truths.</span>{' '}
              These include both personal realities and scientific facts. For instance, the sentence
              “If I eat too much candy, I feel sick” illustrates an event that habitually produces
              the same result for a particular individual.
            </p>
            <p className="text-gray-600 mt-5 text-lg">
              Likewise, the sentence “Brown bears attack if they feel threatened” represents a
              permanent fact about the world around you.
            </p>
            <h3 className="text-2xl mt-16 mb-8">Structure</h3>
            <p className="text-gray-600 mb-5 text-lg">
              There are several rules to follow when constructing a zero conditional sentence, which
              are outlined below:
            </p>
            <ul className="text-gray-600 mb-10 text-lg ">
              <li className=" relative pl-10">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-[7px] text-cyan-500 absolute left-5 top-2.5"
                />
                <span className="font-semibold">Clauses</span>– These types of sentences always
                consist of an “if clause” and a “main clause.” The “if clause” is the event that
                might happen, while the “main clause” is the action that does occur.
              </li>
            </ul>
            <div className="flex border-4 border-pink-50 w-max rounded-xl mb-10">
              {rules.map((rule, index) => (
                <RuleStructure key={`${rule.rule}-${index}`} rule={rule} />
              ))}
            </div>
            <ul className="text-gray-600 mb-10 text-lg ">
              <li className="relative  mb-8 pl-10">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-[7px] text-cyan-500 absolute left-5 top-3"
                />
                <span className="font-semibold">Tense</span>– Both clauses in zero conditional
                sentences are written in the{' '}
                <a href="#" className="text-cyan-500 hover:underline">
                  simple present tense
                </a>
                , which, logically,{' '}
                <span className="font-semibold text-gray-500">
                  is used to describe commonly known facts and repeated actions that take place
                  regularly
                </span>{' '}
                (e.g., “The bus to New York departs every half hour”).
              </li>
              <li className="relative pl-10 ">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-[7px] text-cyan-500 absolute left-5 top-3 "
                />
                <span className="font-semibold">Order</span>– You can often switch the order of the
                “if clause” and the “main clause” without changing the meaning of the sentence, but
                make sure the subject of your sentence is clear. Also note that when the “if clause”
                comes first, you must put a comma between it and the “main clause.” When the “main
                clause” comes first, no comma is required.
              </li>
            </ul>
            <div className="flex border-4 border-pink-50 mb-10 w-max rounded-xl ">
              {rules.map((rule, index) => (
                <RuleStructure key={`${rule.rule}-${index}`} rule={rule} />
              ))}
            </div>
            <p className="text-gray-600  text-lg">
              Note: You would never say or write “They get ice cream if the kids receive good
              grades” because the subject is ambiguous–it’s not clear who “they” is. Therefore, you
              must always specify who the subject of the sentence is in the first clause, regardless
              of which clause you put first (e.g., “The kids get ice cream if they receive good
              grades”).
            </p>
            <ul className="text-gray-600 mt-6 text-lg relative pl-10">
              <li className="pt-0.5">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-[7px] text-cyan-500 absolute left-5 top-3"
                />
                <span className="font-semibold">“If” v. “When”</span>– In zero conditional
                sentences, the word “if” can typically be replaced by the word “when” without
                changing the meaning of the sentence.
              </li>
            </ul>
            <div className="flex border-4 border-pink-50 mb-20 w-max rounded-xl mt-10 ">
              {rules.map((rule, index) => (
                <RuleStructure key={`${rule.rule}-${index}`} rule={rule} />
              ))}
            </div>
            <h3 className="text-2xl mt-16 mb-8"> Examples</h3>
            <p className="text-gray-600  text-lg mb-7">
              Take a look at the different variations of zero conditional sentences that follow the
              guidelines shown above:
            </p>
            <ul className="text-gray-600 text-lg leading-10 ">
              <li className="relative pl-10">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-[7px] text-cyan-500 absolute left-5 top-3  "
                />
                If you put water in the freezer, it turns into ice.
              </li>
              <li className="relative pl-10">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-[7px] text-cyan-500 absolute  left-5 top-3"
                />
                I buy fast food if I forget to bring my lunch to work.
              </li>
              <li className=" relative pl-10">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-[7px] text-cyan-500 absolute left-5 top-3 "
                />
                When it’s cold outside, I make hot chocolate and drink it by the fireplace
              </li>
              <li className=" relative pl-10">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-[7px] text-cyan-500 absolute left-5 top-3 "
                />
                You gain weight when you don’t exercise and eat healthy.
              </li>
              <li className=" relative pl-10">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-[7px] text-cyan-500 absolute  left-5 top-3"
                />
                If we win our soccer game, we go out for drinks.
              </li>
              <li className=" relative pl-10">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-[7px] text-cyan-500 absolute left-5 top-3 "
                />
                My boss complains when my coworkers are late to work.
              </li>
            </ul>
            <h2 className="text-3xl font-semibold  mt-12 mb-8">Exercises</h2>
            <div className="">
              <img
                src="https://preply.com/wp-content/uploads/2022/03/Article-Image_-zero-conditional-min-1024x587.jpg"
                className="w-full"></img>
            </div>
            <p className="text-gray-600  text-lg my-5">
              Based on what you’ve learned about the zero conditional, try your hand at completing
              the following sentences to assess your understanding. Then check your work using the
              answer key at the end of the article.
            </p>
            <p className="text-gray-600  text-lg mb-5">
              <span className="font-semibold text-gray-500 ">Example Question</span> – [My friend /
              to call] ___________________, I answer.
            </p>
            <p className="text-gray-600  text-lg mb-5">
              <span className="font-semibold text-gray-500 ">Example Answer</span> – If my friend
              calls, I answer.
            </p>
            <ol className="list-decimal text-gray-600  text-lg leading-10 pl-8">
              <li>[I / to be hungry] ___________________, I go out to eat.</li>
              <li>You can’t sleep [you / to drink a lot of caffeine] ___________________.</li>
              <li>[My mom / to get sick] ___________________, I make her soup.</li>
              <li>
                My friends and I go to the beach [we / to have a day off] ___________________..
              </li>
              <li>
                [The basketball team / to lose the game] ___________________, the fans are always
                upset.
              </li>
              <li>You can sit at our table [you / to be alone] ___________________.</li>
              <li>
                [The students / to not understand] ___________________, they ask the teacher for
                help.
              </li>
              <li>I cry [I / to see a sad movie] ___________________.</li>
              <li>[You / to miss the exam] ___________________, you fail the class.</li>
              <li>The customers are rude [they / to be put on hold] ___________________.</li>
            </ol>
            <div className="bg-gray-800 rounded-3xl md:flex md:justify-between mb-14 mt-7 sm:block ">
              <div className="sm:w-full md:w-3/5 text-white p-10">
                <h2 className="text-3xl">
                  Master your English.<span className="text-cyan-500 font-semibold">Sign up</span>
                </h2>
                <h2 className="text-3xl mt-2">for the Preply newsletter.</h2>
                <p className="text-base my-3 w-3/5 ">
                  Get expert learning tips weekly straight to your inbox.
                </p>
                <div className="w-full relative border-2 border-gray-500 rounded-2xl ">
                  <form>
                    <input
                      type="search"
                      placeholder="Enter your email address"
                      className="w-full rounded-2xl h-14 pl-5"></input>
                  </form>
                  <div className="absolute right-0 top-0 w-max rounded-2xl ">
                    <Button title={'Sign up'} height={'h-14'} hoverBgColog={'hover:bg-cyan-500'} />
                  </div>
                </div>
                <p className="mt-5 text-xs w-3/4 ">
                  By clicking sign up you agree to receive blog updates. More information can be
                  found in our
                </p>
                <p className="text-sm text-cyan-500 hover:underline">Privacy Policy</p>
              </div>
              <div className="  sm:w-full  md:w-2/5">
                {' '}
                <img
                  src="https://preply.com/wp-content/themes/preply-blog-v2.0/assets/img/del/newsletter.png
"
                  className="w-full"></img>
              </div>
            </div>
            <h2 className="text-3xl font-semibold mb-8">Final thoughts</h2>
            <p className="text-gray-600 text-lg">
              Although learning foreign grammar concepts is a difficult task, it’s certainly not
              impossible. Grammar guides, like this article, can help make the process easier and
              solidify your understanding of complicated rules and structures. However, the best
              option for mastering the grammar of a nonnative language is working with an{' '}
              <a href="" className="text-cyan-500 hover:underline">
                {' '}
                expert language tutor{' '}
              </a>
            </p>
            <p className="text-gray-600 text-lg my-5">
              Imagine learning about the zero conditional one-on-one with an instructor who could
              answer your questions immediately, re-explain confusing ideas, and correct your
              mistakes in real-time. Not only that–they could also help you improve your
              pronunciation as you practice the sentences aloud and build on your existing
              vocabulary by providing alternative words and phrases to use.
            </p>
            <p className="text-gray-600 text-lg">
              At Preply, you can search through hundreds of{' '}
              <a href="#" className="text-cyan-500 hover:underline">
                skilled English tutors
              </a>{' '}
              who are able to develop{' '}
              <span className="font-semibold text-gray-500">
                customized lessons to fit your learning needs
              </span>{' '}
              and provide{' '}
              <span className="font-semibold text-gray-500">
                individual support to achieve your linguistic goals.
              </span>
            </p>
            <p className="text-gray-600 text-lg my-5">
              So, think carefully about this final zero conditional sentence: if you participate in
              Preply’s 1-on-1 online instruction, you can take your English to the next level and
              check many more grammar concepts off your English to-do list!
            </p>
            <h3 className="text-2xl mt-12 mb-8">Answer Key</h3>
            <ol className="list-decimal text-gray-600  text-lg leading-10 pl-8 mb-14">
              <li>If/when I am hungry, I go out to eat.</li>
              <li>You can’t sleep if/when you drink a lot of caffeine.</li>
              <li>If/when my mom gets sick, I make her soup. .</li>
              <li>My friends and I go to the beach if/when we have a day off.</li>
              <li>If/when the basketball team loses the game, the fans are always upset.</li>
              <li>You can sit at our table if/when you are alone.</li>
              <li>If/when the students do not understand, they ask the teacher for help.</li>
              <li>I cry if/when I see a sad movie.</li>
              <li>If/when you miss the exam, you fail the class.</li>
              <li>The customers are rude when/if they are put on hold.</li>
            </ol>
            <div className="flex items-center justify-between text-2xl pt-12 mb-8 border-t-2 border-gray-100 ">
              <p>Previous article</p>
              <p> Next article</p>
            </div>

            <div className="md:flex w-full md:flex-wrap md:justify-between  sm:block ">
              {previousArticle.map((resources, index) => (
                <Resource
                  key={`${resources.resource} ${index}`}
                  resource={resources}
                  mdWidth={' md:w-[48%]'}
                  smWidthFull={'sm:w-full'}
                  smMarginBottom={'sm:mb-20'}
                  mdMarginBottom={'md:mb-0'}
                />
              ))}
            </div>
            <div className="bg-slate-50 rounded-2xl p-7 ">
              <h2 className=" text-2xl">Article by:</h2>
              <div className="flex border-t-2 border-slate-200  mt-7 pt-7">
                <div className="mr-5">
                  <img
                    src="https://preply.com/wp-content/uploads/2021/01/Photo-Filson.jpg"
                    className="h-44 rounded-3xl"></img>
                </div>
                <div>
                  <h2 className="text-3xl text-gray-700">Nicolette Filson</h2>
                  <p className="text-gray-600 text-lg my-7">Preply tutor</p>
                  <p className="text-gray-600 text-lg ml-3 bg-gray-100 w-max px-4 rounded-full py-1 hover:bg-slate-50">
                    {' '}
                    16 articles
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-lg my-10">
                Nicolette is an experienced English educator with a B.A. in secondary English
                education, an M.A. in English linguistics, and a Ph.D. in Curriculum & Instruction -
                English education & literacy. She has had the immense pleasure of putting this
                knowledge into action over the last 12 years as a high school English teacher,
                university instructor, academic tutor, editor, and curriculum writer in both the
                U.S. and abroad.
              </p>
              <div className=" flex items-center justify-between  ">
                <Button
                  title={'Contact Nicolette Filson '}
                  hoverBgColog={'hover:bg-cyan-500'}
                  fontWeight={'font-semibold'}
                  marginRight={'mr-10'}
                />
                <Button
                  title={'Find online tutor'}
                  hoverTextColor={'hover:text-cyan-500'}
                  bgColor={'bg-slate-100'}
                  hoverBorderColor={' hover:border-2 hover:border-cyan-500'}
                  border={'border-2 border-cyan-600'}
                  textColor={'text-cyan-600'}
                  fontWeight={'font-semibold'}
                />
              </div>
            </div>
          </div>
          <div className=" 2xl:absolute 2xl:right-30 2xl:top-0 2xl:px-12 2xl:right-0 sm:hidden 2xl:block  ">
            <CtaBanner
              imgBanner={'https://preply.com/wp-content/uploads/2021/11/admin-ajax.png'}
              imgLogoBlack={'https://preply.com/wp-content/uploads/2022/06/preply_logo_black.svg'}
              title={'Learn English with group classes online'}
              width={'w-48'}
            />
          </div>
        </div>
      </div>

      <div className=" sm:mt-16 xl:hidden ">
        <CtaBanner
          imgBanner={'https://preply.com/wp-content/uploads/2021/11/admin-ajax.png'}
          imgLogoBlack={'https://preply.com/wp-content/uploads/2022/06/preply_logo_black.svg'}
          title={'Learn English with group classes online'}
          width={'w-80'}
        />
      </div>

      <div className="flex justify-center ">
        <div className="2xl:w-[45%] sm:w-[95%]   px-5  ">
          <h2 className="mt-32 text-4xl font-semibold text-center text-gray-700 mb-2">
            Want to learn English online?
          </h2>
          <p className="text-center text-gray-600">These resources are just for you!</p>
          <div className="mt-10 w-full flex justify-between  mb-32  ">
            <Button title={'English tutors'} width={'w-[32%]'} hoverBgColog={'hover:bg-cyan-500'} />
            <Button
              title={' Learn English online'}
              width={'w-[32%]'}
              hoverBgColog={'hover:bg-cyan-500'}
            />
            <Button
              title={' Online English classes'}
              width={'w-[32%]'}
              hoverBgColog={'hover:bg-cyan-500'}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="  sm:w-[95%] xl:w-[65%] px-5">
          <div className="flex items-center mb-7">
            <FontAwesomeIcon icon={faBookOpen} className="text-xl text-amber-500 " />
            <h2 className="text-4xl text-gray-700 pl-5">Similar articles</h2>
          </div>
          <div className="md:flex md:flex-wrap w-full md:justify-between sm:block">
            {SimilarArticles.map((resource, index) => (
              <Resource
                key={`${resource.img} ${index}`}
                resource={resource}
                mdWidth={'md:w-[32%]'}
                smWidthFull={'sm:w-full'}
                smMarginBottom={'sm:mb-24'}
                mdMarginBottom={'md:mb-0'}
              />
            ))}
          </div>

          <div className="w-full bg-gray-50 md:flex p-20 rounded-3xl   relative sm:block sm:my-0 sm:mx-auto">
            <div className="md:w-3/5 sm:w-full ">
              <div className="w-36 sm:block sm:my-0 sm:mx-auto md:mx-0">
                <img src="https://preply.com/wp-content/themes/preply-blog-v2.0/assets/img/svg/logo.svg"></img>
              </div>
              <h2 className="md:text-4xl md:text-start font-semibold my-10 sm:text-center sm:text-2xl">
                Every year thousands of students prepare to speak confidently on Preply
              </h2>
              <p className="text-gray-600 text-base  sm:w-full md:w-3/5 mb-10 sm:text-center ">
                Get fast results with professional online tutors. Prepare to achieve your goals
                today.
              </p>
              <div className="flex justify-center">
                <Button
                  title={'Explore tutors'}
                  width={'w-64'}
                  hoverBgColog={'hover:bg-cyan-500'}
                />
              </div>
            </div>
            <div className=" h-0 sm:mt-14 ">
              <img
                src="https://preply.com/wp-content/uploads/2021/12/CTA_cat_tutors.png"
                className="md:absolute md:right-20 sm:relative sm:block sm:my-0 sm:mx-auto  md:-bottom-16 sm:w-48 md:w-2/5"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-gray-700 text-gray-300 text-sm mt-20 pt-10">
        <div className=" sm:w-[95%] xl:w-[65%] px-5">
          <div className="lg:flex lg:justify-between lg:items-top sm:hidden  ">
            {footerColumns.map((column, index) => (
              <FooterColumn key={`${column.title}-${index} `} data={column} />
            ))}

            <div className="w-1/6  ">
              <div className=" border border-gray-400  w-full font-semibold">
                <LanguagesSelect
                  widthPopover={'w-36'}
                  backgroundPopover={'bg-white'}
                  textAlign={'text-center'}
                  textColor={'text-gray-300'}
                />
              </div>
            </div>
          </div>

          <div className="w-full sm:block  lg:hidden">
            {footerColumns.map((column, index) => (
              <DropDowmColumn key={`${column.title}-${index} `} data={column} />
            ))}
            <div className="border border-gray-400  w-full flex justify-between items-center px-5 py-2 ">
              <LanguagesSelect
                width={'w-full'}
                widthPopover={'w-full'}
                textColor={'text-gray-300'}
                MinWidthMediaMd={'md:min-w-[750px]'}
                MinWidthMediaSm={'sm:min-w-[600px]'}
                backgroundPopover={'bg-gray-200'}
                textColorHover={'hover:text-white'}
                backgroundHover={'hover:bg-blue-600'}
                borderRadius={'rounded-lg'}
                textAlign={'text-start'}
                fontSize={'text-base'}
              />
            </div>
          </div>

          <div className="lg:flex lg:justify-between lg:items-center mb-20 mt-10   border-t-2 border-slate-500  pt-10 text-gray-400">
            <div className="lg:w-2/5  sm:w-full sm:text-center text-gray-300 ">
              <p>2012-2022 Preply Inc.</p>
            </div>
            <div className="flex lg:justify-start lg:w-3/5 items-center sm:w-full sm:justify-center sm:mt-4 lg:mt-0 ">
              <p>Terms of Service </p>
              <FontAwesomeIcon icon={faCircle} className="text-[6px] mx-3 " />
              <p>Privacy Policy </p>
              <FontAwesomeIcon icon={faCircle} className="text-[6px] mx-3" />
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="mask"
        className={`${
          isPopoverOpen ? maskVisibleClass : maskInvisibleClass
        } opacity-50 bg-black fixed top-0 left-0 z-0`}></div>
    </>
  );
}

export default ZeroConditional;
