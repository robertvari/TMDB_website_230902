import React from 'react'
import MoviePoster from "../../images/poster.jpg"
import {Link} from "react-router-dom"

export default function MovieCard({movie_data}) {
  const API_URL = process.env.REACT_APP_API_URL

  return (
    <Link to="/movies/123" className='movie-card'>
        <div className='poster-container'>
            <img src={`${API_URL}/${movie_data.poster_path}`} alt="" />
            <div className='rating-container'>{Math.round(movie_data.vote_average*10)}%</div>
        </div>

        <div className='info-container'>
            <div className='title'>{movie_data.original_title}</div>
            <div className='date'>{movie_data.release_date}</div>
        </div>    
    </Link>
  )
}