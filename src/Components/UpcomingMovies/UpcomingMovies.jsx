import React, { useEffect, useState } from 'react'
import './UpcomingMovies.css'
import MovieCard from '../MovieCard'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import 'ldrs/grid'
import { grid } from 'ldrs';

grid.register()

const pageNums = [
    {id: '1', pageNum: 1},{id: '2', pageNum: 2},{id: '3', pageNum: 3},{id: '4', pageNum: 4},{id: '5', pageNum: 5},{id: '6', pageNum: 6},
    {id: '7', pageNum: 7},{id: '8', pageNum: 8}, {id: '9', pageNum: 9},{id: '10', pageNum: 10}
]

function UpcomingMovies() {
    const [mveList, setMveList] = useState([])
    const [curPage, setPageNum] = useState(1)
    const [loading, setLoading] = useState(true)

    const moviesDataApiCall = async () => {
        setLoading(true)
        const apiKey = process.env.REACT_APP_API_KEY


        const apiEndpoint =`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=${curPage}`
       
        const data = await fetch(apiEndpoint)
        const response = await data.json()
        setLoading(false)
        setMveList(response.results)

    }

    useEffect(() => {
        moviesDataApiCall()
    },[curPage])

  return (
    <div className="container">
        <div className='pagination-container'>
        <h1 className='heading'>Upcoming Movies</h1>
        <div className='pages-style'>
                   <div className='page-nums-container' style={{marginRight: '5px'}} onClick={() => setPageNum((prevNUm) =>
                    (prevNUm - 1 < 1 ? 10 : prevNUm - 1 ) )}><FaArrowLeft/></div>
                    {pageNums.map((obj,index) => (
                        <div className= { curPage === obj.pageNum ? 'active-page-nums-container':'page-nums-container'} onClick={() => setPageNum(obj.pageNum)}>
                        <div className='' key={obj.id}>{obj.pageNum}</div>
                        </div>
                    )) }
                    <div className='page-nums-container' style={{marginLeft: '5px'}} onClick={() => setPageNum((prevNUm) => (prevNUm + 1 > 10 ? 1 : prevNUm + 1))}><FaArrowRight/></div>
        </div>
        </div>

        <div>
        {loading ?  
            <div className='loading-container'>
                <l-grid
                  size="75"
                  speed="0.8"
                  color="black" 
                ></l-grid> 
                </div>:
                <ul className='movies-container'>
                {mveList.map((obj) => (
                    <li key={obj.id}>
                        <MovieCard data = {obj} />
                    </li>
                ))}
                </ul>
        }
        </div>
    </div>
  )
}

export default UpcomingMovies