import { MemoryRouter as Router } from 'react-router-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import Nav from '../components/Nav';
import '@testing-library/jest-dom';

it('renders correctly', () => {
  const tree = renderer.create(
    <Router>
      <Nav />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
