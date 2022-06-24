import React, { Children, useEffect, useState } from 'react'
import { Component } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import About from './componant/About/About'
import Home from './componant/Home/Home'
import Navpar from './componant/Navpar/Navpar'
import Movis from './componant/movis/Movis'
import Tv from './componant/TV/Tv'
import People from './componant/People/People'
import Network from './componant/Network/Network'
import Signup from './componant/Signup/Signup'
import Login from './componant/Login/Login'
import Notfound from './componant/notfound/Notfound'
import jwtDecode from 'jwt-decode'
import Details from './componant/Movie detailse/Details'
import TvDetails from './componant/tvDetails/TvDetails'
import PeopleDetails from './componant/peopleDetails/PeopleDetails'

export function App() {
  const [userData, setuserData] = useState(null)
  let navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("usertoken")) {
      getdata()
    }
  }, [])

  function getdata() {
    let userData = jwtDecode(localStorage.getItem("usertoken"))
    setuserData(userData)
  }
  function logout() {
    localStorage.removeItem("usertoken")
    setuserData(null)
    navigate("/login")

  }
  function ProtacteRoute({children}){
    if (!localStorage.getItem("usertoken")) {
     return <Navigate to="/login"/>
      
    } else {
      return children
    }
  }
  return <>

    <Navpar getuserData={userData} logout={logout} /> 
    <div className=' container-fluid'>
      <Routes>
        <Route path='/' element={<ProtacteRoute><Home /></ProtacteRoute>} />
        <Route path='home' element={<ProtacteRoute> <Home /></ProtacteRoute>} />
        <Route path='about' element={<ProtacteRoute> <About /> </ProtacteRoute>} />
        <Route path='movis' element={<ProtacteRoute> <Movis /> </ProtacteRoute>} />
        <Route path='tv' element={<ProtacteRoute> <Tv /> </ProtacteRoute>} />
        <Route path='people' element={<ProtacteRoute> <People /> </ProtacteRoute>} />
        <Route path='network' element={<ProtacteRoute> <Network /> </ProtacteRoute>} />
        <Route path='signup' element={<Signup />} />

        <Route path='moviedetails' element={<Details />}>
        <Route path=':id' element={<Details />} />
        </Route>
        <Route path='tvdetails' element={<TvDetails />}>
        <Route path=':id' element={<TvDetails />} />
        </Route>
        <Route path='peopleDetails' element={<PeopleDetails />}>
        <Route path=':id' element={<PeopleDetails />} />
        </Route>

        <Route path='login' element={<Login getuserData={getdata} />} />
        <Route path='*' element={<Notfound />} />


      </Routes>
    </div>


  </>
}





