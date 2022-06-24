import React from 'react'
import { Link } from 'react-router-dom'

export default function Navpar(props) {
  return <>
    
   
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-transparent mb-5 pb-5">
        <Link className="navbar-brand fw-bolder" to="home">Noxe</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

            {
              props.getuserData? <>

                <li className="nav-item">
                  <Link className="nav-link" to="home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="About">about</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="movis">movis</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Tv">Tv</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="people">People</Link>
                </li>

              </> : ""
                
            }
          </ul>


          <ul className="navbar-nav ms-auto d-flex align-items-center  mt-2 mt-lg-0">

            <li className="nav-item">
              <i className=' fab fa-facebook mx-2 '></i>
              <i className=' fab fa-youtube mx-2'></i>
              <i className=' fab fa-instagram mx-2'></i>
              <i className=' fab fa-spotify mx-2 me-4'></i>
            </li>
            {
              props.getuserData?<>
               <li className="nav-item">
              <span onClick={props.logout} className="nav-link me-5  click" >Log out</span>
            </li>
              </>
              :
              <>
              <li className="nav-item">
              <Link className="nav-link" to="signup">signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="login">Login</Link>
            </li>
              </>
            }
           
           

          </ul>

        </div>
      </nav>
    </div>
    </>
}
