import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { IUserInfo, IUserRepos } from '../interfaces/interfaces';
import axiosInstance from '../services/api';


const SecondScreen = () => {
  const { login } = useParams();
  //@ts-ignore
  const [user, setUser] = useState<IUserInfo, {}>({});
  const [repos, setRepos] = useState<IUserRepos[]>([]);
  //@ts-ignore
  const [inputValue, SetInputValue] = useState("")

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
        setRepos(repos.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchUserLogin()
    fetchUserRepos()
  }, [])

   function inputHandler(e: any) {
    SetInputValue(e.target.value)
  } 

  return (
    <>
    <h1 className='title'>GitHub Searcher</h1>

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

      <input onInput={inputHandler} type="search" placeholder='Search of Users Repositories' className='search-input' />

      {reposListRender(inputValue, repos)}
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