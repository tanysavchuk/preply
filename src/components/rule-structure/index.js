import React from 'react';
import PropTypes from 'prop-types';

const RuleStructure = (props) => {
  return (
    <div className={`text-gray-600  px-3 ${props.rule.bg} ${props.rule.borderX} `}>
      <div className="p-6 font-semibold">{props.rule.rule}</div>
      <div className="p-6 "> {props.rule.structure}</div>
      <div className="p-6 italic font-extralight "> {props.rule.example}</div>
    </div>
  );
};

RuleStructure.propTypes = {
  rule: PropTypes.object
};

export default RuleStructure;
