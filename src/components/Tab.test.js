import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Tab, TabList, Tabs} from './index';

it('renders correctly', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
    <TabList>
      <Tabs>
        <Tab title="Some Title" />
      </Tabs>
    </TabList>
  );
  expect(tree).toMatchSnapshot();
});
