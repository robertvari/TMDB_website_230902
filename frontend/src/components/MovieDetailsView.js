import React from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetailsView() {
    const {id} = useParams()

    return (
        <h1>Movie Details View: {id}</h1>
    )
}
