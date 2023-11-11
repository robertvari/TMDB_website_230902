import React, { useEffect, useState } from 'react'
import Logo from "../images/logo.svg"
import SearchBox from './micro/SearchBox'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Navbar() {
  const API_URL = process.env.REACT_APP_API_URL
  const [menu_list, set_menu_list] = useState([])
  
  useEffect(() => {
    axios.get(`${API_URL}/api/db/menu-list/`).then(response => set_menu_list(response.data))
  }, [])

  return (
    <div className='navbar'>
        <div className='nav-block'>
            <Link to="/"><img  src={Logo} alt="" /></Link>

            {
              menu_list.map(menu_item => <Link to={menu_item.slug} className='navlink'>{menu_item.name}</Link>)
            }

            {/* <Link to="/" className='navlink'>Movies</Link>
            <Link to="/tvshows" className='navlink'>TV Shows</Link>
            <Link to="/people" className='navlink'>People</Link>
            <Link to="/more" className='navlink'>More</Link> */}
        </div>

        <div className='nav-block'>
            <Link to="/login" className='navlink'>Login</Link>
            <Link to="/registration" className='navlink'>Join TMDB</Link>
            <SearchBox/>
        </div>
    </div>
  )
}
