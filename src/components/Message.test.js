import React from 'react';
import Message from './Message';
import ShallowRenderer from 'react-test-renderer/shallow';

it('renders correctly', () => {
	const renderer = new ShallowRenderer();
  const tree = renderer.render(<Message />);
  expect(tree).toMatchSnapshot();
});
