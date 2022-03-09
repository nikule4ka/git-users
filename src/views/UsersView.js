import React, { useEffect } from 'react';
import { fetchUsers } from '../redux/users/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import UsersPagination from '../components/Pagination/UsersPagination';
import '../styles/styles.css';

const UsersView = ({ match }) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.allUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container_users">
      <ul className="users_list">
        {users.map(({ login, html_url, avatar_url, id }) => (
          <li key={id} className="user">
            <Link to={`${match.url}/${login}`} className="link_user">
              <img
                src={avatar_url}
                alt={avatar_url}
                className="users_img"
              ></img>
              <h2 className="user_login">{login}</h2>
            </Link>
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              <GitHubIcon size="2x" color="primary" />
            </a>
          </li>
        ))}
      </ul>
      <UsersPagination />
    </div>
  );
};

export default UsersView;
