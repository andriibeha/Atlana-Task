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
          <li className='repos__item' key={repo?.id}>
            <UserRepo repo={repo} />
          </li>
        ))}
      </ul>
    </>
  )
}























function reposListRender(inputValue: any, data: any) { 
  console.log(data)
    if (!inputValue.trim()) { 
        return (
            <div>
                {data.map((rep: {name:string, id: number, html_url: string, forks:number, stargazers_count :number }) => {
                    return (
                        <ul className='list repos__list'>
                          <a href={rep.html_url} className='repos__link'>
                            <li className='repos__item' key={rep.id}>
                              <p className='repos__name'> {rep.name} </p>
                              <div className='repos__stats'>
                                <p className='repos__forks'>{rep.forks} Forks</p>
                                <p className='repos__satrs'>{rep.stargazers_count} Star</p>
                              </div>
                            </li>
                          </a>
                       </ul>
                    )
                })}
            </div>
        )
    } else { 
        let filterUserRepos = data.filter((dataItem: any) => {
            return dataItem.name.toLowerCase().includes(inputValue.toLowerCase().trim())
        });

        console.log(filterUserRepos)
         
        return (
          <div>
                {filterUserRepos.map((rep: {name:string, id: number, html_url: string, forks:number, stargazers_count :number}) => {
                    return (
                        <ul className='list repos__list'>
                          <a href={rep.html_url} className='repos__link'>
                            <li className='repos__item' key={rep.id}>
                              <p className='repos__name'> {rep.name} </p>
                              <div className='repos__stats'>
                                <p className='repos__forks'>{rep.forks} Forks</p>
                                <p className='repos__satrs'>{rep.stargazers_count} Star</p>
                              </div>
                            </li>
                          </a>
                       </ul>
                    )
                })}
            </div>
        )
    }
}

export default SecondScreen;