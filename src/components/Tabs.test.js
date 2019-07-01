import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {TabList, Tabs} from './index';

it('renders correctly', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
    <TabList>
      <Tabs title="Some Title" />
    </TabList>
  );
  expect(tree).toMatchSnapshot();
});
