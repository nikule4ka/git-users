import { createReducer } from '@reduxjs/toolkit';
import {
  fetchUserDetailsSuccess,
  fetchUsersSuccess,
  resetUserDetails,
  getLastUserId,
  fetchPaginationSuccess,
} from './actions';
import { combineReducers } from 'redux';

const allUsers = createReducer([], {
  [fetchUsersSuccess]: (_, { payload }) => payload,
  [fetchPaginationSuccess]: (_, { payload }) => payload,
});

const userDetails = createReducer([], {
  [fetchUserDetailsSuccess]: (_, { payload }) => payload,
  [resetUserDetails]: (_, __) => [],
});

const lastUserId = createReducer(0, {
  [getLastUserId]: (_, { payload }) => payload,
});

export const usersReducer = combineReducers({
  allUsers,
  userDetails,
  lastUserId,
});
