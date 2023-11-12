import React, { useState, useContext } from 'react'
import { MovieContext } from '../contexts/MovieContext'

export default function SearchBox() {
    const [opened, set_opened] = useState(false)
    const {search, set_search} = useContext(MovieContext)

    return (
        <div className='search-box-container'>
            {opened&& <input type="text" value={search} onChange={e => set_search(e.target.value)}/>}
            <i className="fa fa-search" aria-hidden="true" onClick={e => set_opened(!opened)}/>
        </div>
    )
}
