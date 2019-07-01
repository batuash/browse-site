import React from 'react';

const Topics = ({isShow, ...props}) => {
  if (!isShow) {
    return null;
  }

  return (
    <div className="topicsWrapper">
      <div className="listWrapper">
        <ul>
          <li>HTML Techniques</li>
          <li>CSS Styling</li>
          <li>Flash Tutorials</li>
          <li>Web Miscellanea</li>
          <li>Sites News</li>
          <li>Web Development</li>
        </ul>
      </div>
    </div>
  );
};

export default Topics;
