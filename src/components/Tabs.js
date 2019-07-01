import React from 'react';

const Tabs = props => (
  <div className="tabsWrapper">{props.renderTabListChildren(props)}</div>
);

export default Tabs;
