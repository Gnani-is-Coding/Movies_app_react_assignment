import React, { useEffect, useState } from 'react'
import './PopularMovies.css'
import MovieCard from '../MovieCard'

function PopularMovies() {
    const [mveList, setMveList] = useState([])
    const [curPage, setPage] = useState(1) 

    const moviesDataApiCall = async () => {
        const apiKey = process.env.REACT_APP_API_KEY
        const readAccessKey = process.env.REACT_APP_READ_ACCESS_KEY

        const apiEndpoint =`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${curPage}`
        const options = {}
        const data = await fetch(apiEndpoint)
        const response = await data.json()
        setMveList(response.results)

    }

    useEffect(() => {
        moviesDataApiCall()
    },[])
  return (
    <div className="container">
        <h1 className='heading'>Popular Movies</h1>

        <ul className='movies-container'>
            {mveList.map((obj) => (
                <li key={obj.id}>
                    <MovieCard data = {obj} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PopularMovies