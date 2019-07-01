import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Header} from './index';

it('renders correctly', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(<Header />);
  expect(tree).toMatchSnapshot();
});
