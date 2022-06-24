import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function People() {
  const [person, setperson] = useState([])
  useEffect(() => {
    trindperson()

  }, [])
  let prefxImg = "https://image.tmdb.org/t/p/w500"
  const trindperson = async () => {

    let myperson = await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=0d3d1e9e1c59328e1b2d6061742ec320`)

    setperson(myperson.data.results)


  }
  return <>
    <div className=' mt-5 pt-5 container' >
      <div className='row '>
      {person.map((person,index) =>
        <div key={index} className="col-lg-2  col-md-4 col-6 ">
          <div className="content  position-relative">
           <Link to={`/peopleDetails/${person.id}`}><img src={prefxImg + person.profile_path} alt="" className='w-100' />
            <h3 className='mb-5'>{person.name}</h3>

            <div className=" position-absolute top-0 end-0 p-2 bg-info">
                {person.popularity}
            </div>
            </Link> 
          </div>
          
        </div>
      )}
      </div>
    </div>
    </>
}
