import React from 'react';
import { IUserRepos } from '../interfaces/interfaces';

interface Props  {repo:IUserRepos}
function UserRepo({ repo }:Props) {
    const {name, forks,stargazers_count, html_url} = repo
    return (
        <>
            <p className='repos__name'> {name} </p>
            <div className='repos__stats'>
                <p className='repos__forks'>{forks} Forks</p>
                <p className='repos__satrs'>{stargazers_count} Stars</p>
            </div>     
        </>
  )
};
export default UserRepo