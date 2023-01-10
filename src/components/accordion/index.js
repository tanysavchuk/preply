import React, { useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import PropTypes from 'prop-types';

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
Icon.propTypes = {
  id: PropTypes.number,
  open: PropTypes.number
};

export default function AccordionQuestions() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          What are Preply group classes?
        </AccordionHeader>
        <AccordionBody>
          Preply group classes is a marketplace of online English learning classes for adults. We
          help learners find and register for great group classes across a variety of topics. We
          help qualified tutors create, manage and promote their classes. Preply focuses on small
          group, live, interactive, online classes, delivering excellent learning experiences.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          What type of courses do you offer?
        </AccordionHeader>
        <AccordionBody>
          We offer different types of courses to learn English for beginner, intermediate and
          advanced level learners (A2-C1). They cover a wide range of topics, including everything
          from English for work to everyday conversation practice. You can filter by a variety of
          criteria to help you find the perfect course for you. We are continuously adding more
          courses to the platform.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>How do the courses work?</AccordionHeader>
        <AccordionBody>
          All classes on Preply are live online spoken English classes. All classes include live
          meetings over video at scheduled times. Each course has its own meeting time and
          frequency. Every course has a clear class plan that outlines expected objectives and
          in-class activities.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>How much does it cost?</AccordionHeader>
        <AccordionBody>
          Preply is free to join, and each course is priced separately based on class format and
          teacher preference.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)}>How do payments work?</AccordionHeader>
        <AccordionBody>
          You can pay for the first class first to try it out. If you enjoyed the class, you will
          then have up to 6 days to purchase the remaining classes from the course.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(6)}>
          What is the online in-class experience?
        </AccordionHeader>
        <AccordionBody>
          Each class is in a small group format of up to 6 students. After you register, you will
          receive an email with a link and details on how to join using Zoom. During the class, the
          tutor will use the course materials. Tutors will make sure you interact with the materials
          and the other students. Towards the end of the class, the tutor will recap, ensure
          everybody has understood the class and received helpful feedback.
        </AccordionBody>
      </Accordion>
    </>
  );
}
