import React, { useEffect,useCallback, useState } from 'react'
import './Banner.css'
import { API_KEY } from '../../Constants/Constants'
import axios from '../axios'
import { imageUrl } from '../../Constants/Constants'

function Banner() {
  const [movie, setMovie] = useState({}) 

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const movies = response.data.results
        if (movies.length > 0) {
          const randomMovie = movies[Math.floor(Math.random() * movies.length)]
          setMovie(randomMovie)
        }
      })
      .catch((error) => {
        console.error("Failed to fetch trending movies:", error)
      })
  }, [])



  return (
    <div 
      style={{
        backgroundImage: `url(${movie && movie.backdrop_path ? imageUrl + movie.backdrop_path : ''})`,
      }}
      className='banner'
    >
      <div className='content'>
        <h1 className='title'>{movie.name || 'Loading...'}</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>
          {movie.overview || 'Loading...'}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
