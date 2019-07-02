import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Archives} from './index';

it('renders correctly', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(<Archives isShow={true} />);
  expect(tree).toMatchSnapshot();
});
