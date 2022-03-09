import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import { PaginationItem } from '@material-ui/lab';
import { fetchPagination } from '../../redux/users/operations';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      justifyContent: 'center',
      display: 'flex',
      marginBottom: 20,
    },
  },
}));

const UsersPagination = () => {
  const classes = useStyles();
  const page = 70;
  const dispatch = useDispatch();
  const lastUserId = useSelector(state => state.users.lastUserId);

  const changePagePagination = () => {
    dispatch(fetchPagination(lastUserId));
  };

  return (
    <div className={classes.root}>
      <Pagination
        count={page}
        variant="outlined"
        color="primary"
        onClick={changePagePagination}
      />
    </div>
  );
};

export default UsersPagination;
