import { createAction } from '@reduxjs/toolkit';

export const fetchUsersRequest = createAction('users/fetchUsersRequest');
export const fetchUsersSuccess = createAction('users/fetchUsersSuccess');
export const fetchUsersError = createAction('users/fetchUsersError');

export const fetchUserDetailsRequest = createAction(
  'user/fetchUserDetailsRequest',
);
export const fetchUserDetailsSuccess = createAction(
  'user/fetchUserDetailsSuccess',
);
export const fetchUserDetailsError = createAction('user/fetchUserDetailsError');

export const resetUserDetails = createAction('user/resetUserDetails');

export const getLastUserId = createAction('user/getLastUserId');

export const fetchPaginationSuccess = createAction(
  'users/fetchPaginationSuccess',
);
export const fetchPaginationRequest = createAction(
  'users/fetchPaginationRequest',
);
export const fetPaginationError = createAction('users/fetPaginationError');
