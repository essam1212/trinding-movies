import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Movis() {
  const [movis, setMovis] = useState([])
  useEffect(() => {
    trindMovis()

  }, [])
  let prefxImg = "https://image.tmdb.org/t/p/w500"
  const trindMovis = async () => {

    let myMovis = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=0d3d1e9e1c59328e1b2d6061742ec320`)

    setMovis(myMovis.data.results)


  }
  return <>
    <div className=' mt-5 pt-5 container' >
      <div className='row '>
      {movis.map((movie,index) =>
        <div key={index} className="col-lg-2  col-md-4 col-6 ">
          <div className="content  position-relative">
           <Link to={`/moviedetails/${movie.id}`}><img src={prefxImg + movie.poster_path} alt="" className='w-100' />
            <h3 className='mb-5'>{movie.title}</h3>

            <div className=" position-absolute top-0 end-0 p-2 bg-info">
                {movie.vote_average}
            </div>
            </Link> 
          </div>
          
        </div>
      )}
      </div>
    </div>
    </>
}
