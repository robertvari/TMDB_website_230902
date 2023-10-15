import React from 'react'
import FoldableCard from './micro/FoldableCard'

export default function Sidepanel() {
  return (
    <div className='sidepanel'>
      <FoldableCard title="Sort"/>
      <FoldableCard title="Where to watch"/>
      <FoldableCard title="Filters"/>
    </div>
  )
}
