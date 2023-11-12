import React, {createContext, useState} from "react"

export const MovieContext = createContext(true)

export const MovieProvider = (props) =>{
    const [search, set_search] = useState("Robert")

    return(
        <MovieContext.Provider value={{
            search: search,
            set_search: set_search
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}