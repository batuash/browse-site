import React from 'react';

const Tab = ({index, selected, title, setSelected}) => {
  const className = index === selected ? 'selected' : '';

  return (
    <button className={className} onClick={() => setSelected(index)}>
      {title}
    </button>
  );
};

export default Tab;
