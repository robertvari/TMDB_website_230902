import React from 'react'
import { Link } from 'react-router-dom'

export default function RegistrationPage() {
  return (
    <div className='content-container registration-container'>
      <h2>Sign up for an account</h2>
      <p>Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.</p>

      <form action="">
        <input type="text" placeholder='Username'/>
        <input type="password" placeholder='Password'/>
        <input type="password" placeholder='Password Confirm'/>
        <input type="email" placeholder='Email'/>

        <div>
          <button>Sign Up</button>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  )
}
