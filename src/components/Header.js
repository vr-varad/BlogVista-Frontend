import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { UserContext,Mode } from '../UserContext'
import logo from '../assets/logo.png'
import { MdOutlineDarkMode,MdDarkMode  } from "react-icons/md";

const Header = () => {
  const {userInfo,setUserInfo} = useContext(UserContext)
  const {mode,setMode} = useContext(Mode)
  
  useEffect(()=>{
    fetch('http://localhost:4000/profile',{
      credentials: 'include',
      method: 'GET'
    }).then(response =>{
      return response.json()
    }).then(userInfo=>{
      setUserInfo(userInfo)
    })
  },[])

  function changeMode(){
    setMode(mode => !mode)
    console.log(mode)
  }

  function logout(){
    fetch('http://localhost:4000/logout',{
      credentials: 'include',
      method:'POST'
    })
    setUserInfo('')
  }
  const username = userInfo.username
  return (
    <header className={mode?'darkModeLinkButton':'lightModeLinkButton'}>
        <Link to="/" style={{border:'none',fontSize:'1.7rem',fontWeight:'bold'}} >Welcome to BlogVista!!</Link>
        
        <nav className='header-nav'>
          {username && (
            <>
            <h3>Hello {username}!!!!</h3>
              <Link to='/create'>Create New Post</Link>
              <a onClick={logout}>LogOut</a>
            </>
          )}
          {!username && (
            <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </>
          )}
          {mode?<MdDarkMode onClick={changeMode} />:<MdOutlineDarkMode onClick={changeMode}/>}
        </nav>
      </header>
  )
}

export default Header