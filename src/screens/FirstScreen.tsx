import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IForAllUser } from '../interfaces/interfaces';
import SecondScreen from '../screens/SecondScreen'
import axiosInstance from '../services/api';



const FirstScreen = () => {
  const [allUser, setAllUser] = useState<IForAllUser[]>([])

  useEffect(() => {
    async function fetchAllUser() {
      try {
        const result = await axiosInstance.get('/users');
        setAllUser(result.data)
      } catch (error) { 
        console.log(error)
      }
    };


    fetchAllUser();
  }, [])

  return (
    < >
      <h1 className='title'>GitHub Searcher</h1>

      <input type="search" placeholder='Search of Users' className='search-input'/>


      {allUser.map(user => {
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
      
    </>
  )
}

export default FirstScreen;