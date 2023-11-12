import React, { useEffect, useState } from 'react'
import FoldableCard from './micro/FoldableCard'
import ComboBox from './micro/ComboBox'

function Sorting(){ 
  const options = [
    "Popularity Descending",
    "Popularity Ascending",
    "Rating Descending",
    "Rating Ascending",
    "Release Date Descending",
    "Release Date Ascending",
    "Title (A-Z)",
    "Title (Z-A)",
  ]

  return(
    <div onClick={e => e.stopPropagation()}>
      <p>Sort Results By</p>

      <ComboBox items={options} selected_item={options[2]}/>
    </div>
  )
}

function Filters(){
  const genre_list = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama"]

  return(
    <div onClick={e => e.stopPropagation()}>
      {
        genre_list.map(genre => <div key={genre}>{genre}</div>)
      }
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
