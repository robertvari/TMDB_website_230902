import React, { useContext } from 'react'
import FoldableCard from './micro/FoldableCard'
import ComboBox from './micro/ComboBox'
import { MovieContext } from './contexts/MovieContext'

function Sorting(){ 
  const {set_sorting} = useContext(MovieContext)

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

      <ComboBox items={options} selected_item={options[2]} callback_function={set_sorting}/>
    </div>
  )
}

function Genres(){
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
      <FoldableCard title="Filters" content={<Genres/>}/>
    </div>
  )
}
