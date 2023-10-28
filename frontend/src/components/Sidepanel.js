import React from 'react'
import FoldableCard from './micro/FoldableCard'

export default function Sidepanel() {
  return (
    <div className='sidepanel'>
      <FoldableCard title="Sort" content={<div>Sort combo box</div>}/>
      <FoldableCard title="Filters" content={<div>Filters...</div>}/>
    </div>
  )
}
