// @flow
import React from 'react';

export type TabsProps = {
  renderTabListChildren: Function
};

const Tabs = (props: TabsProps) => (
  <div className="tabsWrapper">{props.renderTabListChildren(props)}</div>
);

export default Tabs;
