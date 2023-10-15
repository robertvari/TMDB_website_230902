import React from 'react'
import FooterLogo from "../images/footer_logo.svg"

export default function Footer() {
  return (
    <div className='footer'>
      <div className='block'>
        <img src={FooterLogo} alt="" />
        <button>Join the Community</button>
      </div>

      <div className='block'>
        <h3>THE BASICS</h3>
        <div>About TMDB</div>
        <div>Contact Us</div>
        <div>API</div>
        <div>System Status</div>
      </div>

      <div className='block'>
        <h3>GET INVOLVED</h3>
        <div>Contribution Bible</div>
        <div>Add New Movie</div>
        <div>Add New TV Show</div>
      </div>

      <div className='block'>
        <h3>COMMUNITY</h3>
        <div>Guidelines</div>
        <div>Discussions</div>
        <div>Leaderboard</div>
        <div>Twitter</div>
      </div>

      <div className='block'>
        <h3>LEGAL</h3>
        <div>Terms of Use</div>
        <div>API Terms of Use</div>
        <div>Privacy Policy</div>
        <div>DMCA Takedown Request</div>
      </div>

    </div>
  )
}
