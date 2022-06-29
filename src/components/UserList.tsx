import React from 'react';
import { Link, To } from 'react-router-dom';
import { IForAllUser } from '../interfaces/interfaces';

interface Props  {user:IForAllUser}
function UserList({ user }:Props) {
    const {avatar_url, login } = user
    return (
        <>
            <Link to={login}>
                <img src={avatar_url} alt="avatar" className='avatar' />
                <p className='login'>{login}</p>
            </Link>
            
        </>
  )
}

/* function UserList ({ inputValue, data }: any)  {
    return (
        <>
            {userListRender(inputValue, data)}
        </>
  )
}

function userListRender(inputValue: any, data: any) { 
    if (!inputValue.trim()) { 
        return (
            <div>
                {data.map((user: {login:string, id: number, avatar_url: string}) => {
                    return (
                        <ul className='list'>
                        <Link to={user.login}>
                        <li key={user.id} className='item'>
                            <img src={user.avatar_url} alt="avatar" className='avatar' />
                            <p className='login'>{user.login}</p>
                        </li>
                        </Link>
                    </ul>
                    )
                })}
            </div>
        )
    } else { 
        let filterUserArray = data.filter((dataItem: any) => {
            return dataItem.login.toLowerCase().includes(inputValue.toLowerCase().trim())
        });

        console.log(filterUserArray)
         
        return (
            <div>
                {filterUserArray.map((user: {login:string, id: number, avatar_url: string}) => {
                    return (
                        <ul className='list'>
                        <Link to={user.login}>
                        <li key={user.id} className='item'>
                            <img src={user.avatar_url} alt="avatar" className='avatar' />
                            <p className='login'>{user.login}</p>
                        </li>
                        </Link>
                    </ul>
                    )
                })}
            </div>
        )
    }
} */

export default UserList;


/* {allUser.map(user => {
        return (
          <ul className='list'>
            <Link to={user.login}>
              <li key={user.id} className='item'>
                <img src={user.avatar_url} alt="avatar" className='avatar' />
                <p className='login'>{user.login}</p>
              </li>
            </Link>
          </ul>
        )
      })} */