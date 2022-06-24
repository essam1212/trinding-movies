import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Tv() {
  const [tv, settv] = useState([])
  useEffect(() => {
    trindtv()

  }, [])
  let prefxImg = "https://image.tmdb.org/t/p/w500"
  const trindtv = async () => {

    let mytv = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=0d3d1e9e1c59328e1b2d6061742ec320`)

    settv(mytv.data.results)


  }
  return <>
    <div className=' mt-5 pt-5 container' >
      <div className='row '>
      {tv.map((tv,index) =>
        <div key={index} className="col-lg-2  col-md-4 col-6 ">
          <div className="content  position-relative">
           <Link to={`/tvdetails/${tv.id}`}><img src={prefxImg + tv.poster_path} alt="" className='w-100' />
            <h3 className='mb-5'>{tv.name}</h3>

            <div className=" position-absolute top-0 end-0 p-2 bg-info">
                {tv.vote_average}
            </div>
            </Link> 
          </div>
          
        </div>
      )}
      </div>
    </div>
    </>
}
