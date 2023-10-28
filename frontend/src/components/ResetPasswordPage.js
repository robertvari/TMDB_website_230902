import React from 'react'
import { Link } from 'react-router-dom'

export default function ResetPasswordPage() {
  return (
    <div className='content-container reset-password-container'>
        <h2>Reset password</h2>
        <p>Enter the email you used to sign up for a TMDB account and we'll send you the steps required to reset your password.</p>

        <form action="">
            <input type="email" placeholder="What's your email?"/>
            <div>
                <button>Continue</button>
                <Link to="/login">Cancel</Link>
            </div>
        </form>
    </div>
  )
}
