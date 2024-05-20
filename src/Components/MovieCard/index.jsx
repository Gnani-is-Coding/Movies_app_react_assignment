import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'


function MovieCard({ data }) {
    console.log(data, "data")
    const imageURl = 'https://image.tmdb.org/t/p/w500' + data.backdrop_path 
  return (
    <Link to={`/movie/:${data.id}`} style={{textDecoration: 'none', color:'inherit'}}>
    <div className='card-container'>
        <img src={imageURl} alt={data.original_title} className='image'/>

        <div className='movie-description'>
            <h1 className='movie-name'>{data.original_title}</h1>
            <div className='add-on-data'>
                <p className='p'>Release Date: {data.release_date}</p>
                <p className='p'>Rating: {data.vote_average}</p>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default MovieCard