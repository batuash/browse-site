import React, {useState, useEffect} from 'react';

// @todo move this logic to an HOC
const TabList = props => {
  const [selected, setSelected] = useState(0);
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
