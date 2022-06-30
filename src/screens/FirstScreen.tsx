import { userInfo } from 'os';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import User from '../components/User';
import { IForAllUser } from '../interfaces/interfaces';
import SecondScreen from '../screens/SecondScreen'
import axiosInstance from '../services/api';

const FirstScreen = () => {
  const [users, setUsers] = useState<IForAllUser[]>([]);
  const [inputValue, SetInputValue] = useState('');

  async function fetchAllUser() {
      try {
        const result = await axiosInstance({
          method:'GET',
          url: '/users',
          params:{per_page:100}
        })
        const { data } = result
        setUsers(data)
      } catch (error) { 
        console.log(error)
      }
  };
  
  useEffect(() => {
    fetchAllUser();
  }, []);

  //DEBOUNCE
  function inputHandler(e: any) {
    SetInputValue(e.target.value)
  } 

  return (
    < >
      <h1 className='title'>GitHub Searcher</h1>
      <input onInput={inputHandler} type="search" placeholder='Search of Users' className='search-input' />
      <ul className='list'>
        {users.filter((user: IForAllUser) => 
          user.login.toLowerCase().includes(inputValue.toLowerCase().trim())
        ).map((user) => (
          <li className='item' key={user?.id}>
            <User user={user} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default FirstScreen;