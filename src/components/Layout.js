import React,{useContext} from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import {Mode} from '../UserContext'


const Layout = () => {
  const {mode,setMode} = useContext(Mode)
  return (
    <main className={mode?'darkMode':'lightMode'}>
        <Header/>
        <Outlet/>
    </main>
  )
}

export default Layout