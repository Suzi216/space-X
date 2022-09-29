import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Myprofile from '../components/Myprofile';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Myprofile />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
