import React from 'react';
import {Link} from 'react-router-dom';
import {random} from 'lodash/fp';

const Pages = ({isShow = true, ...props}) => {
  if (!isShow) {
    return null;
  }

  const pages = ['topics', 'archives', 'pages', 'somepage', 'someotherpage'];

  return (
    <div className="pagesWrapper">
      <div className="pagesContent">
        <h3>List of pages</h3>
        <div className="listWrapper">
          <ul>
            {pages.map((page, index) => (
              <li key={`${page}_${index}`}>
                <Link to={`/${page}`}>{page}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const SomePage = () => (
  <div>
    <h1>This is some page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
);

export const SomeOtherPage = () => (
  <div>
    <h1>This is some other page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
);

export default Pages;
