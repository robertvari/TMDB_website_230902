import React, {createContext, useState, useEffect} from "react"
import axios from 'axios'

export const MovieContext = createContext(true)

export const MovieProvider = (props) =>{
    const API_URL = process.env.REACT_APP_API_URL
    const [search, set_search] = useState("")
    const [movie_list, set_movie_list] = useState([])
    const [movie_list_proxy, set_movie_list_proxy] = useState([])
    const [sorting, set_sorting] = useState("")

    // handle search state changes
    useEffect(() => {
        if(search.length === 0){
            set_movie_list_proxy(movie_list)
        }else{
            const new_movie_list = movie_list.filter(movie_data => movie_data.title.toLowerCase().includes(search.toLowerCase()))
            set_movie_list_proxy(new_movie_list)
        }
    }, [search])
    
    // get movie list from server
    useEffect(() => {
      axios(
        {
            method: "get",
            url: `${API_URL}/api/db/movie-list/`
        }).then(response => {set_movie_list(response.data); set_movie_list_proxy(response.data)})
    }, [])

    useEffect(() => {
        const sorting_list = {
            "Popularity Descending": "-popularity",
            "Popularity Ascending": "popularity",
            "Rating Descending": "-vote_average",
            "Rating Ascending": "vote_average",
            "Release Date Descending": "-release_date",
            "Release Date Ascending": "release_date",
            "Title (A-Z)": "title",
            "Title (Z-A)": "-title",
        }

        axios({
            method: "post",
            url: `${API_URL}/api/db/movie-list/`,
            data: {"sorting": sorting_list[sorting]}
        }).then(response => {set_movie_list(response.data); set_movie_list_proxy(response.data)})
    }, [sorting])

    return(
        <MovieContext.Provider value={{
            search: search,
            set_search: set_search,
            movie_list: movie_list_proxy,
            set_sorting: set_sorting
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}