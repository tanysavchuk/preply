import React from 'react';
import PropTypes from 'prop-types';

const FooterColumn = (props) => {
  return (
    <div className="w-1/6 mr-3 ">
      <h2 className="font-semibold mb-2 text-base"> {props.data.title}</h2>
      <ul className="text-sm leading-8 text-gray-400">
        {props.data.list.map((link) => (
          <li key={`${link.name}`}>{link.name}</li>
        ))}
      </ul>
    </div>
  );
};

FooterColumn.propTypes = {
  data: PropTypes.object
};

export default FooterColumn;
