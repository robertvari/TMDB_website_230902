import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className='content-container login-container'>
      <h2>Login to your account</h2>
      <p>In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple. <Link to="/registration">Click here</Link> to get started.</p>

      <form action="">
        <input type="text" placeholder='Username'/>
        <input type="password" placeholder='Password'/>

        <div>
          <button>Login</button>
          <Link to="/reset-password">Reset password</Link>
        </div>
      </form>
    </div>
  )
}
