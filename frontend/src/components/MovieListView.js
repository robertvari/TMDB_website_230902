import React, {useContext} from 'react'
import Sidepanel from "./Sidepanel"
import CardGrid from "./CardGrid"
import { MovieContext } from './contexts/MovieContext'

export default function MovieListView() {
  const {search} = useContext(MovieContext)

  return (
    <div className='content-container movie-list-view'>
      <h1>{search}</h1>
      <Sidepanel/>
      <CardGrid/>
    </div>
  )
}