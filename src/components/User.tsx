import React from 'react';
import { Link, To } from 'react-router-dom';
import { IForAllUser } from '../interfaces/interfaces';

interface Props  {user:IForAllUser}
function User({ user }:Props) {
    const {avatar_url, login } = user
    return (
        <>
            <Link to={login} className="user__link">
                <img src={avatar_url} alt="avatar" className='user__avatar' />
                <p className='user__login'>{login}</p>
            </Link>
        </>
  )
}

export default User;