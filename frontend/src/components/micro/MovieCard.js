import React from 'react'
import MoviePoster from "../../images/poster.jpg"


export default function MovieCard() {
  return (
    <div className='movie-card'>
        <div className='poster-container'>
            <img src={MoviePoster} alt="" />
            <div className='rating-container'>59%</div>
        </div>

        <div className='info-container'>
            <div className='title'>The Exorcist: Believer</div>
            <div className='date'>Oct 06, 2023</div>
        </div>    
    </div>
  )
}