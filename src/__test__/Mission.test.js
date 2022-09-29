import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Mission from '../components/Mission';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Mission />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
