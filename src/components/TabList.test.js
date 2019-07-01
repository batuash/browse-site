import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {TabList} from './';

it('renders correctly', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(<TabList />);
  expect(tree).toMatchSnapshot();
});
