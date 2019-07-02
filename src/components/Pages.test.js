import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Pages, SomePage, SomeOtherPage} from './index';

it('renders correctly', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(<Pages isShow={true} />);
  expect(tree).toMatchSnapshot();
});

it('SomePage renders correctly', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(<SomePage />);
  expect(tree).toMatchSnapshot();
});

it('SomeOtherPage renders correctly', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(<SomeOtherPage />);
  expect(tree).toMatchSnapshot();
});
