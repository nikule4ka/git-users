import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './users/reducers';

// const reducer = (state = {}, action) => state;

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
