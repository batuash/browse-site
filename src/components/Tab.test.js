import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {random} from 'lodash/fp';
import {Tab, TabList, Tabs} from './index';

jest.mock('lodash/fp', () => ({random: () => () => 0}));

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
