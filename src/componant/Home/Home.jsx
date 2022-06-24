import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [movis, setMovis] = useState([])
  const [tv, setTv] = useState([])
  const [people, setpeople] = useState([])
  useEffect(() => {
    trindMovis()
    trindTv()
    trindperson()
  }, [])
  let prefxImg = "https://image.tmdb.org/t/p/w500"


  const trindMovis = async () => {

    let myMovis = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=0d3d1e9e1c59328e1b2d6061742ec320`)

    setMovis(myMovis.data.results.slice(0,10))


  }
  const trindTv = async () => {
    const TvApi = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=0d3d1e9e1c59328e1b2d6061742ec320`)

    setTv(TvApi.data.results.slice(0,10))
  }
  const trindperson = async () => {
    const peopleApi = await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=0d3d1e9e1c59328e1b2d6061742ec320`)

    setpeople(peopleApi.data.results.slice(0, 10))
  }

  return <>
  
  {/* =======================movies===================================== */}
  <div className='   container' >
    <div className='row '>

      <div className="col-md-4">
        <div className="title ">
          <div className=' line mb-5 pb-5 w-25'></div>
          <h2>Trinding Movies <br />To watch naw </h2>
          <p className='fst-light text-secondary pt-2'>most watched movies by days</p>
          <div className=' line  mb-5 w-75'></div>
          
        </div>
      </div>


      {movis.map((movie,index) =>
        <div key={index} className="col-lg-2  col-md-4 col-6  ">
          <div className="content  position-relative">
           <Link to={`/moviedetails/${movie.id}`}><img src={prefxImg + movie.poster_path} alt="" className='w-100' />
            <h3 className='mb-3'>{movie.title}</h3>

            <div className=" position-absolute top-0 end-0 p-2 bg-info">
                {movie.vote_average}
            </div>
            </Link> 
          </div>
          
        </div>
      )}
    </div>
    </div> 
    {/* ============================tv==================================== */}
  <div className=' mt-5 pt-5 container' >
    <div className='row '>

      <div className="col-md-4">
        <div className="title ">
          <div className=' line mb-5 pb-5 w-25'></div>
          <h2>Trinding Tv <br />To watch naw </h2>
          <p className='fst-light text-secondary pt-2'>most watched movies by days</p>
          <div className=' line  mb-5 w-75'></div>
        </div>
      </div>


      {tv.map((tv,index) =>
        <div key={index} className="col-lg-2  col-md-4 col-6  ">
          <div className="content position-relative ">
          <Link to={`/tvdetails/${tv.id}`}> <img src={prefxImg + tv.poster_path} alt="" className='w-100' />
            <h3 className='mb-3'>{tv.name}</h3>
            <div className=" position-absolute top-0 end-0 p-2 bg-info">
                {tv.vote_average}
            </div>
            </Link>
          </div>
        </div>
      )}
    </div>
    </div> 
{/* ===========people========================================== */}
<div className=' mt-5 pt-5 container' >
    <div className='row '>

      <div className="col-md-4">
        <div className="title ">
          <div className=' line mb-5 pb-5 w-25'></div>
          <h2>Trinding Tv <br />To watch naw </h2>
          <p className='fst-light text-secondary pt-2'>most watched movies by days</p>
          <div className=' line  mb-5 w-75'></div>
        </div>
      </div>


      {people.map((people,index) =>
        <div key={index} className="col-lg-2  col-md-4 col-6  ">
          <div className="content position-relative ">
          <Link to={`/peopleDetails/${people.id}`}>  <img src={prefxImg + people.profile_path} alt="" className='w-100 ' />
            <h3 className='mb-3'>{people.name}</h3>
            <div className=" position-absolute top-0 end-0 p-2 bg-info">
                {people.popularity}
            </div>
            </Link>
          </div>
        </div>
      )}
    </div>
    </div> 
   
  </>
}
