import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function MovieDetailsView() {
    const API_URL = process.env.REACT_APP_API_URL
    const {slug} = useParams()
    const [movie_data, set_movie_data] = useState(null)

    useEffect(()=>{
        axios.get(`${API_URL}/api/db/movie/${slug}/`).then(res => set_movie_data(res.data))
    }, [])

    if(!movie_data){
        return null
    }

    return (
        <div className='movie-details-container'>
            <div className='backdrop' style={{backgroundImage: `url(${API_URL}${movie_data.backdrop_path})`}}>
                
                
                <div className='h-layout'>
                    
                    <img src={`${API_URL}${movie_data.poster_path}`} alt="" />
                    
                    <div className='movie-details-container'>
                        <h1 className='title'>{movie_data.title} <small>({movie_data.release_date.slice(0, 4)})</small></h1>
                        <small>{movie_data.release_date} ({movie_data.language}) | {movie_data.genres.join(", ")}</small>
                        <div className='rating-container'>{Math.round(movie_data.vote_average*10)}%</div>
                        <h4>{movie_data.overview}</h4>
                    </div>

                </div>                
            </div>
        </div>
    )
}
