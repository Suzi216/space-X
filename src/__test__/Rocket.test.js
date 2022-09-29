import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rocket from '../components/Rocket';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Rocket />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
