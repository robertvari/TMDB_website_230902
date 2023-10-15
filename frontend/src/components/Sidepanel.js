import React from 'react'
import FoldableCard from './micro/FoldableCard'

export default function Sidepanel() {
  return (
    <div className='sidepanel'>
      <FoldableCard title="Sort" content={<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, illo.</div>}/>
      <FoldableCard title="Where to watch" content={<div>Lorem ipsum dolor sit amet.</div>}/>
      <FoldableCard title="Filters" content={<h1>Robert</h1>}/>
    </div>
  )
}
