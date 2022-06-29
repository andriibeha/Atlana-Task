import React from 'react';
import { Link, To } from 'react-router-dom';
import { IUserInfo } from '../interfaces/interfaces';

interface Props  {user:IUserInfo}
function UserInfo({ user }:Props) {
    return (
        <div className='user-info'>
        <img src={user.avatar_url} alt="avatar" className='user-info__avatar' />
        <ul className='user-list list'>
          <li className='user-item'>
            Login: {user.login ? user.login : "Nothing here"} 
          </li>

          <li className='user-item'>
            Email: {user.email ? user.email : "Nothing here"}
          </li>

          <li className='user-item'>
            Location: {user.location ? user.location : "Nothing here"}
          </li>

          <li className='user-item'>
            Join date: {user.join_date ? user.join_date : "Nothing here"}
          </li>

          <li className='user-item'>
            Followers: {user.followers ? user.followers : "Nothing here"}
          </li>

          <li className='user-item'>
            Following: {user.following ? user.following : "Nothing here"}
          </li>

          <li className='user-item'>
            Publick repos: {user.public_repos ? user.public_repos : "Nothing here"}
          </li>

          <li className='user-item'>
            Bio: {user.bio ? user.bio : "Nothing here"}
          </li>
        </ul>
      </div>
  )
};
export default UserInfo