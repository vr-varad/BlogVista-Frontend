// Footer.js

import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom'
import {Mode} from '../UserContext'

const Footer = () => {
  const {mode} = useContext(Mode)
  const [email,setEmail] = useState('')
  async function subscribe(e){
    e.preventDefault()
    const reqEmail = email
    if(!email){
      alert('Please provide email.')
      return
    }
    await fetch('http://localhost:4000/subscribe',{
      method:'POST',
      body: JSON.stringify({reqEmail}),
      headers:{
        'Content-Type':'application/json'
      },
    }).then(res=>res.json())
    .then(data=>console.log(data))
    alert(`${email} thanks for subscribing!!!`)
    setEmail('')

  }
  return (
    <footer className={mode?'darkMode darkModeLink footer':'lightMode lightModeLink footer'}>
      <div className="footer-options">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <a href="#about">About Me</a>
      </div>
      <div className="subscribe">
        <input type="email" placeholder="Subscribe to newsletter" value={email} onChange={e=>setEmail(e.target.value)}  />
        <button onClick={subscribe}>Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
