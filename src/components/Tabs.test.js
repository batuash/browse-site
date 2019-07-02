import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {random} from 'lodash/fp';
import {TabList, Tabs} from './index';

jest.mock('lodash/fp', () => ({random: () => () => 0}));

it('renders correctly', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
    <TabList>
      <Tabs title="Some Title" />
    </TabList>
  );
  expect(tree).toMatchSnapshot();
});
