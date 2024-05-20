import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import 'ldrs/grid'
import { grid } from 'ldrs'
import './MovieDetails.css'

grid.register()


function MovieDetails() {
    const {moviesID} = useParams()
    const [movieDetails, setMovieDetails] = useState([])
    const [loading, setLoading] = useState(true)

    const getMovieDetails = async () => {
        setLoading(true)
        const apiKey = process.env.REACT_APP_API_KEY  
        const endPoint = `https://api.themoviedb.org/3/movie/${moviesID.slice(1)}?api_key=${apiKey}&language=en-US` 

        const data = await fetch(endPoint)
        const response = await data.json()
        setLoading(false)
        setMovieDetails(response)
        console.log(response, "res[osne")
    }

    useEffect(()=> {
        getMovieDetails()
    },[])

    const backgroundPosterURl = 'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path

  return (
    <div>
        {loading ?  
            <div className='loading-container'>
                <l-grid
                  size="75"
                  speed="0.8"
                  color="black" 
                ></l-grid> 
                </div>:(
                    <div className='main-container'>
                        <div className='card' style={{backgroundImage: `url(${backgroundPosterURl})` }}>
                           <div className='movie-card'>
                            <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt={movieDetails.title}  className='card-image'/> 
                           </div>

                           <div className='details-container'>
                                <h1 className='heading'>{movieDetails.title}</h1>
                                <p className='para'>{movieDetails.tagline}</p>

                                <p className='para'>Language: {movieDetails.original_language}</p>

                                <p className='para'>{movieDetails.overview}</p>
                                <p className='para'>Rating: {movieDetails.vote_count}</p>
                           </div>
                        </div>
                    </div>
                )
        }
    </div>
  )
}

export default MovieDetails