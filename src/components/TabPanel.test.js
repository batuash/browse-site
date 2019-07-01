import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {TabList, TabPanel} from './index';

it('renders correctly', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
    <TabList>
      <TabPanel>
        <span> some content </span>
      </TabPanel>
    </TabList>
  );
  expect(tree).toMatchSnapshot();
});
