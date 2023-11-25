import React, { useContext, useEffect, useState } from 'react'
import FoldableCard from './micro/FoldableCard'
import ComboBox from './micro/ComboBox'
import { MovieContext } from './contexts/MovieContext'
import axios from 'axios'

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
  const API_URL = process.env.REACT_APP_API_URL
  const {set_genre_id} = useContext(MovieContext)
  const [genre_list, set_genre_list] = useState([])
  const [active_genre, set_active_genre] = useState("")

  const item_clicked = (item_name, item_id) => {
    if(active_genre === item_name){
      set_active_genre("")
      set_genre_id(null)
    }else{
      set_active_genre(item_name)
      set_genre_id(item_id)
    }
  }

  useEffect(()=>{
    axios.get(`${API_URL}/api/db/genre-list/`).then(res => set_genre_list(res.data))
  }, [])

  return(
    <div className='genre-list' onClick={e => e.stopPropagation()}>
      {
        genre_list.map(genre => <div className={active_genre===genre.name? "active":""} key={genre.id} onClick={e => item_clicked(genre.name, genre.id)}>{genre.name}</div>)
      }
    </div>
  )
}

export default function Sidepanel() {
  return (
    <div className='sidepanel'>
      <FoldableCard title="Sort" content={<Sorting/>}/>
      <FoldableCard title="Genres" content={<Genres/>}/>
    </div>
  )
}
