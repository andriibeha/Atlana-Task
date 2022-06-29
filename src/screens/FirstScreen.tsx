import { userInfo } from 'os';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserList from '../components/UserList';
import { IForAllUser } from '../interfaces/interfaces';
import SecondScreen from '../screens/SecondScreen'
import axiosInstance from '../services/api';




const FirstScreen = () => {
  const [allUser, setAllUser] = useState<IForAllUser[]>([]);
  const [users, setUsers] = useState<IForAllUser[]>([]);
  const [inputValue, SetInputValue] = useState('');


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
  
  useEffect(() => {
    let filterUserArray = allUser.filter((dataItem: IForAllUser) => 
      dataItem.login.toLowerCase().includes(inputValue.toLowerCase().trim())
    );
    setUsers(filterUserArray)
   },[inputValue])

  //DEBOUNCE
  function inputHandler(e: any) {
    SetInputValue(e.target.value)
  } 


  return (
    < >
      <h1 className='title'>GitHub Searcher</h1>

      <input onInput={inputHandler} type="search" placeholder='Search of Users' className='search-input' />
      
      {users.map((user: { login: string, id: number, avatar_url: string }) => (
      <UserList user={user} />
      )})

    </>
  )
}

export default FirstScreen;