import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import MissionReducer from './mission/mission';
import rocketsReducer from './rockets/Rockets';

const mainReducer = combineReducers({
  rockets: rocketsReducer,
  mission: MissionReducer,
});
const store = configureStore({
  reducer: mainReducer,
  middleware: [thunk],
});

export default store;
