import axios from 'axios';
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersError,
  fetchUserDetailsError,
  fetchUserDetailsSuccess,
  fetchUserDetailsRequest,
  getLastUserId,
  fetchPaginationSuccess,
  fetchPaginationRequest,
  fetPaginationError,
} from './actions';

axios.defaults.baseURL = 'https://api.github.com/';

const fetchUsers = () => async dispatch => {
  dispatch(fetchUsersRequest());

  try {
    const { data } = await axios.get('/users?per_page=100');
    dispatch(fetchUsersSuccess(data));
    dispatch(getLastUserId(data[data.length - 1].id));
  } catch (error) {
    dispatch(fetchUsersError(error.message));
  }
};

const fetchUserDetails = username => async dispatch => {
  dispatch(fetchUserDetailsRequest());

  try {
    const { data } = await axios.get(`/users/${username}`);
    dispatch(fetchUserDetailsSuccess(data));
  } catch (error) {
    dispatch(fetchUserDetailsError(error.message));
  }
};

const fetchPagination = lastUserId => async dispatch => {
  dispatch(fetchPaginationRequest());
  try {
    const { data } = await axios.get(`/users?per_page=100&since=${lastUserId}`);
    dispatch(fetchPaginationSuccess(data));
    dispatch(getLastUserId(data[data.length - 1].id));
  } catch (error) {
    dispatch(fetPaginationError(error.message));
  }
};

export { fetchUsers, fetchUserDetails, fetchPagination };
