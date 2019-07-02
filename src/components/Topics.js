import React from 'react';
import CountUp from 'react-countup';
import {random} from 'lodash/fp';

const Topics = ({isShow, ...props}) => {
  if (!isShow) {
    return null;
  }

  const topics = [
    'HTML Techniques',
    'CSS Styling',
    'Flash Tutorials',
    'Web Miscellanea',
    'Sites News',
    'Web Development'
  ];

  // console.log('CountUp2');
  // console.log(CountUp);

  return (
    <div className="topicsWrapper">
      <div className="listWrapper">
        <ul>
          {topics.map((topic, index) => (
            <li key={`${topic}_${index}`}>
              <span className="topic">{topic}</span>
              <span className="posts">
                <CountUp
                  end={random(0)(100)}
                  duration={5}
                  delay={0.5}
                  suffix=" POSTS"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Topics;
