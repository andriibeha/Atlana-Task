import React from 'react';
import { Link, To } from 'react-router-dom';
import { IUserRepos } from '../interfaces/interfaces';

interface Props  {repo:IUserRepos}
function UserRepo({ repo }:Props) {
    const {name, forks,stargazers_count } = repo
    return (
        <>
            <p className='repos__name'> {name} </p>
            <div className='repos__stats'>
                <p className='repos__forks'>{forks} Forks</p>
                <p className='repos__satrs'>{stargazers_count} Star</p>
            </div>         
        </>
  )
};
export default UserRepo