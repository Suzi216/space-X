import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import BooksReducer from './books/books';
import MissionReducer from './mission/mission';

const rootReducer = combineReducers({
  mission: MissionReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
