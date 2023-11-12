import React, { useContext, useEffect, useState } from 'react'
import MovieCard from './micro/MovieCard'
import { MovieContext } from './contexts/MovieContext'

export default function CardGrid() {
  const {movie_list} = useContext(MovieContext)

  return (
    <div className='card-grid'>
      {
        movie_list.map(movie_data => <MovieCard key={movie_data.id} movie_data={movie_data}/>)
      }
    </div>
  )
}
