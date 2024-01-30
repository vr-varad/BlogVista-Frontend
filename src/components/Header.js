import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { UserContext,Mode } from '../UserContext'
import { MdOutlineDarkMode,MdDarkMode  } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

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
  }

  function logout(){
    fetch('http://localhost:4000/logout',{
      credentials: 'include',
      method:'POST'
    })
    setUserInfo('')
  }
  const username = userInfo.username
  const userId = userInfo.id
  return (
    <header className={mode?'darkModeLinkButton':'lightModeLinkButton'}>
      <div className='headerName'>
        <Link to="/" style={{border:'none',fontSize:'1.7rem',fontWeight:'bold'}} >Welcome to BlogVista!!</Link>
        {mode?<MdDarkMode onClick={changeMode} />:<MdOutlineDarkMode onClick={changeMode}/>}
      </div>
        
        
        <nav className='header-nav'>
          {username && (
            <>
           
              <Link to='/create'>Create New Post</Link>
              <a onClick={logout}>LogOut</a>
              <div>
                <Link to={`/profile/${userId}`} style={{borderRadius:"360px"}} ><FaRegUser className='userProfile' /></Link>
                <h3 style={{fontSize:'0.8rem',textAlign: "center"}}>Hello {username}!!!!</h3>
              </div>
            </>
          )}
          {!username && (
            <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </>
          )}
          
        </nav>
      </header>
  )
}

export default Header