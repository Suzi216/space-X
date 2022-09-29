import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/Rockets';

const mainReducer = combineReducers({
  rockets: rocketsReducer,
});
const store = configureStore({
  reducer: mainReducer,
  middleware: [thunk],
});

export default store;
