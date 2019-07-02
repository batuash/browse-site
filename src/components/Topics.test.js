import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {random} from 'lodash/fp';
import {Topics} from './index';

jest.mock('lodash/fp', () => ({random: () => () => 1}));

it('renders correctly', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(<Topics isShow={true} />);
  expect(tree).toMatchSnapshot();
});
