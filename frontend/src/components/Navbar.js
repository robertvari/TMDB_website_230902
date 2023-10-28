import React from 'react'
import Logo from "../images/logo.svg"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='nav-block'>
            <Link to="/"><img  src={Logo} alt="" /></Link>
            <Link to="/" className='navlink'>Movies</Link>
            <Link to="/tvshows" className='navlink'>TV Shows</Link>
            <Link to="/people" className='navlink'>People</Link>
            <Link to="/more" className='navlink'>More</Link>
        </div>

        <div className='nav-block'>
            <Link to="/login" className='navlink'>Login</Link>
            <Link to="/registration" className='navlink'>Join TMDB</Link>
            <i className="fa fa-search" aria-hidden="true"/>
        </div>
    </div>
  )
}
