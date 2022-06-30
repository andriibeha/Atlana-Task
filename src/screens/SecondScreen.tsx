import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import UserRepo from '../components/Repo';
import UserInfo from '../components/UserInfo';
import { IUserInfo, IUserRepos } from '../interfaces/interfaces';
import axiosInstance from '../services/api';


const SecondScreen = () => {
  const { login } = useParams();
  const [user, setUser] = useState<IUserInfo>();
  const [allRepos, setAllRepos] = useState<IUserRepos[]>([]);
  const [repos, setRepos] = useState<IUserRepos[]>([]);
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    async function fetchUserLogin() {
      try {
        const user = await axiosInstance.get(`/users/${login}`);
        setUser(user.data);
      } catch (error) {
        console.log(error)
      }
    }

    async function fetchUserRepos() {
      try {
        const repos = await axiosInstance.get(`/users/${login}/repos`)
        const { data } = repos
        setAllRepos(data);
        setRepos(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchUserLogin()
    fetchUserRepos()
  }, []);

  useEffect(() => {
      let filterUserRepos = allRepos.filter((dataItem: any) => {
          return dataItem.name.toLowerCase().includes(inputValue.toLowerCase().trim())
      });
      setRepos(filterUserRepos)
  },[inputValue])

   function inputHandler(e: any) {
    setInputValue(e.target.value)
  } 

  return (
    <>
    <h1 className='title'>GitHub Searcher</h1>
      {user ? <UserInfo user={user} /> : <div className="loader"/>}
      <input onInput={inputHandler} type="search" placeholder='Search of Users Repositories' className='search-input' />
      <ul className='list repos__list'>
        {repos.map((repo) => (
          <a href={repo.html_url} className="repos__link">
            <li className='repos__item' key={repo?.id}>
              <UserRepo repo={repo} />
            </li>
          </a>
        ))}
      </ul>
    </>
  )
}

export default SecondScreen;