import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetails } from '../redux/users/operations';
import PeopleIcon from '@material-ui/icons/People';
import '../styles/styles.css';

const UserDetailsView = ({ match }) => {
  const dispatch = useDispatch();
  const username = match.params.username;

  const {
    avatar_url,
    login,
    followers,
    following,
    created_at,
    company,
    email,
    location,
    blog,
    bio,
  } = useSelector(state => state.users.userDetails);

  useEffect(() => {
    dispatch(fetchUserDetails(username));
  }, [dispatch]);

  return (
    <>
      <div className="container_user_details">
        <div>
          <img src={avatar_url}></img>
        </div>
        <div className="container_text">
          <h4 className="user_details_login">{login}</h4>
          <div className="user_follow">
            <PeopleIcon></PeopleIcon>
            <p className="user_follow_text">{followers} followers</p>
            <p>&#183;</p>
            <p className="user_following">{following} following</p>
          </div>
          <p className="user_created  user_font">Created at: {created_at}</p>
          <p className="user_font">Company: {company}</p>
          {email ? <p>Email: {email}</p> : ''}
          <p className="user_font">Location: {location}</p>
          <p className="user_font">Blog: {blog}</p>
          {bio ? <p className="user_font">Bio: {bio}</p> : ''}
        </div>
      </div>
    </>
  );
};

export default UserDetailsView;
