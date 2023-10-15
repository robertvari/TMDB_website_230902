import React from 'react'
import Logo from "../images/logo.svg"

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='nav-block'>
            <img  src={Logo} alt="" />
            <div className='navlink'>Movies</div>
            <div className='navlink'>TV Shows</div>
            <div className='navlink'>People</div>
            <div className='navlink'>More</div>
        </div>

        <div className='nav-block'>
            <div className='navlink'>Login</div>
            <div className='navlink'>Join TMDB</div>
            <i className="fa fa-search" aria-hidden="true"/>
        </div>
    </div>
  )
}
