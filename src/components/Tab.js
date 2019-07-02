// @flow
import React from 'react';

export type TabProps = {
  index: number,
  selected: number,
  title: string,
  setSelected: Function
};

const Tab = ({index, selected, title, setSelected}: TabProps) => {
  const className: string = index === selected ? 'selected' : '';

  return (
    <button className={className} onClick={() => setSelected(index)}>
      {title}
    </button>
  );
};

export default Tab;
