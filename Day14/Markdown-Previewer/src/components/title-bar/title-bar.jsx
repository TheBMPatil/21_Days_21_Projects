import React from 'react';
import './title-bar.css';

const TitleBar = ({ title, aside }) => {
  return (
    <div className="mb-4">
      <div className="titleBar__wrap">
        {/* Display the title if provided */}
        {title && <h4 className="mb-2">{title}</h4>}

        {/* Display the aside content if provided */}
        {aside && <h6>{aside}</h6>}
      </div>
      <hr />
    </div>
  );
};

export default TitleBar;
