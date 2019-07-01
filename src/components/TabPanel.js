import React from 'react';

const TabPanel = ({renderTabListChildren, index, selected, ...props}) =>
  renderTabListChildren({
    ...props,
    isShow: index - 1 === selected
  });

export default TabPanel;
