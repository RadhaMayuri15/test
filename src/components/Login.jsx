import React from 'react'
import {register , handleSubmit} from 'react-hook-form'


function Login({users}) {
  const dat={name:xy}

  function handleFormSubmit(user){
    let getUser=users.find(u=> u.username===user.username && u.password===user.password)
    if(!getUser){
      alert('Login successful. ');


    }else{
      alert('Invalid');
    }
  }


  return (
    <div>
       <form onSubmit={handleSubmit(handleFormSubmit)}>
      <label htmlFor="username">Username: </label>
      <input type="text" name='username' id="username" />
      <label htmlFor="password">Password</label>
      <input type="password" />
      <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login