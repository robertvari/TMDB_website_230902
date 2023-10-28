import React from 'react'
import FoldableCard from './micro/FoldableCard'

function Sorting(){
  return(
    <div onClick={e => e.stopPropagation()}>
      <p>Sort Results By</p>
      <select>
        <option>Popularity Descending</option>
        <option>Popularity Ascending</option>
        <option>Rating Descending</option>
        <option>Rating Ascending</option>
        <option>Release Date Descending</option>
        <option>Release Date Ascending</option>
        <option>Title (A-Z)</option>
        <option>Title (Z-A)</option>
      </select>
    </div>
  )
}

function Filters(){
  return(
    <div>
      Filters...
    </div>
  )
}


export default function Sidepanel() {
  return (
    <div className='sidepanel'>
      <FoldableCard title="Sort" content={<Sorting/>}/>
      <FoldableCard title="Filters" content={<Filters/>}/>
    </div>
  )
}
