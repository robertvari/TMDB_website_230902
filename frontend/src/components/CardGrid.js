import React, { useEffect, useState } from 'react'
import MovieCard from './micro/MovieCard'
import axios from 'axios'

export default function CardGrid() {
  const API_URL = process.env.REACT_APP_API_URL
  const [movie_list, set_movie_list] = useState([])


  useEffect(() => {
    axios.get(`${API_URL}/api/movie-list/`).then(response => set_movie_list(response.data))
  }, [])

  return (
    <div className='card-grid'>
      {
        movie_list.map(movie_data => <MovieCard key={movie_data.id} movie_data={movie_data}/>)
      }
    </div>
  )
}
