import React, {useState, useEffect} from 'react';
import {random} from 'lodash/fp';

// @todo move this logic to an HOC
const TabList = props => {
  const [selected, setSelected] = useState(random(0)(2));
  const renderTabListChildren = props => {
    const {children, ...childProps} = props;

    return React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        ...childProps,
        index
      });
    });
  };

  return (
    <div className="tabListWrapper">
      {renderTabListChildren({
        ...props,
        selected,
        setSelected,
        renderTabListChildren
      })}
    </div>
  );
};

export default TabList;
