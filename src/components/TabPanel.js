// @flow
import React from 'react';

export type TabPanelListProps = {
  renderTabListChildren: Function,
  index: number,
  selected: number
};

const TabPanel = ({
  renderTabListChildren,
  index,
  selected,
  ...props
}: TabPanelListProps) =>
  renderTabListChildren({
    ...props,
    isShow: index - 1 === selected
  });

export default TabPanel;
