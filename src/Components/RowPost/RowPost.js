import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../axios'
import { API_KEY, imageUrl } from '../../Constants/Constants'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlid] = useState('')

  useEffect(() => {
    axios.get(props.url)
      .then((response) => {
        console.log(response.data)
        setMovies(response.data.results)
      })
      .catch((error) => {
        console.error('Failed to fetch movies:', error)
      })
  }, [props.url])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }

  const handleMovie = (id) => {
    console.log("Fetching video for movie ID:", id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log("Video data:", response.data)
        if (response.data.results.length !== 0) {
          setUrlid(response.data.results[0])
        }
      })
      .catch((error) => {
        console.error("Failed to fetch movie videos:", error)
      })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj) =>
          <img
            key={obj.id}
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? 'smallPoster' : 'poster'}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="Poster"
          />
        )}
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost
