import React from 'react'
import {register , handleSubmit} from 'react-hook-form'

function Register({users, setUsers}) {

  function handleFormSubmit(user){
    setUsers([...users, user]);
    alert('Please proceed to login')
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
      <label htmlFor="username">Username: </label>
      <input type="text" name='username' id="username" />
      <label htmlFor="password">Password</label>
      <input type="password" />
      <button className="btn btn-primary" type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register