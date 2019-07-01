import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Topics} from './index';

it('renders correctly', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(<Topics isShow={true} />);
  expect(tree).toMatchSnapshot();
});
