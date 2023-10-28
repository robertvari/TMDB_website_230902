import React from 'react'
import Sidepanel from "./Sidepanel"
import CardGrid from "./CardGrid"

export default function MovieListView() {
  return (
    <div className='content-container movie-list-view'>
      <Sidepanel/>
      <CardGrid/>
    </div>
  )
}