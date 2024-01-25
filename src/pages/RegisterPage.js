import React, { useState } from 'react'

const RegisterPage = () => {
  const rand = Math.random();
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  async function register(e){
    e.preventDefault()
    const response = await fetch('http://localhost:4000/register',{
      method:'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'}
    })
    if(response.ok == false){
      alert('Registration Failed (UserName has been used) ')
    }else{
      alert('Registration Successfull')
    }
  }
  return (
    <>
    <div className='login-image'><img src={`https://robohash.org/${rand}.png`} /></div>
    <form  className='register'onSubmit={register}>
      <h1>Register</h1>
        <input type='text' 
               placeholder='username' 
               value={username} 
               onChange={e=>setUsername(e.target.value)}/>
        <input type='password' 
               placeholder='password'
               value={password}
               onChange={e=>setPassword(e.target.value)}/>
        <button>Register</button>
      </form>
    </>
    
  )
}

export default RegisterPage