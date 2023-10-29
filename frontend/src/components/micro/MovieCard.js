import React from 'react'
import MoviePoster from "../../images/poster.jpg"
import {Link} from "react-router-dom"

export default function MovieCard({movie_data}) {
  return (
    <Link to="/movies/123" className='movie-card'>
        <div className='poster-container'>
            <img src={movie_data.poster_path} alt="" />
            <div className='rating-container'>{Math.round(movie_data.vote_average*10)}%</div>
        </div>

        <div className='info-container'>
            <div className='title'>{movie_data.title}</div>
            <div className='date'>{movie_data.release_date}</div>
        </div>    
    </Link>
  )
}