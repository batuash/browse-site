// @flow
import React from 'react';

const Header = () => {
  // const className = index === selected ? 'selected' : '';
  const title = 'Browse Site';
  const subTitle = 'SELECT A TAB';

  return (
    <div className="headerWrapper">
      <h2>{title}</h2>
      <span>{subTitle}</span>
    </div>
  );
};

export default Header;
