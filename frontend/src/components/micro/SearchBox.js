import React, { useState } from 'react'

export default function SearchBox() {
    const [opened, set_opened] = useState(false)


    return (
        <div className='search-box-container'>
            {opened&& <input type="text" />}
            <i className="fa fa-search" aria-hidden="true" onClick={e => set_opened(!opened)}/>
        </div>
    )
}
