import axios from 'axios'
import Joi from 'joi'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  let navegat=useNavigate()
const [err, seterr] = useState("")
const [errorList, seterrorList] = useState([])
const [loding, setlod] = useState(false)
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: 0
  })
// ----------------------------
  function signupUser(e) {
    const myuser = { ...user }
    myuser[e.target.name] = e.target.value
    
    setUser(myuser)
 
  }
  // ================================
 async function submitSignup(e) {
    e.preventDefault()
    let validationResult=validation(user)
    console.log(validationResult)
    
if (validationResult.error) {
  
seterrorList(validationResult.error.details)
} else {

    setlod(true)
    seterrorList([])
    let {data}=await axios.post(`https://route-egypt-api.herokuapp.com/signup`,user)
    if (data.message==="success") {
      setlod(false)
      navegat("/login")
    } else {
     seterr(data.message) 
     setlod(false) 

}
}

  }
// ---------------------------------------------------
  // --------------------------------
  function validation(user){
    let schema = Joi.object({ 
      first_name: Joi.string().alphanum().min(3).max(30).required(), 
      last_name: Joi.string().alphanum().min(3).max(30).required(), 
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(), 
      age: Joi.number().min(10).max(50).required(), 
    }) 
    return schema.validate(user,{abortEarly:false}) 
  }
  
  // --------------------------------
  return (
    <div>
      <h2 className=' my-5'>signup naw</h2>

      <form onSubmit={submitSignup}>
        <label htmlFor="first_name">first name</label>
        <input onChange={signupUser} type="text" className=' form-control my-3' name='first_name' id='first_name' />

        <label htmlFor="last_name">last name</label>
        <input onChange={signupUser} type="text" className=' form-control my-3' name='last_name' id='last_name' />

        <label htmlFor="age">age</label>
        <input onChange={signupUser} type="number" className=' form-control my-3' name='age' id='age' />

        <label htmlFor="email">email</label>
        <input onChange={signupUser} type="email" className=' form-control my-3' name='email' id='email' />

        <label htmlFor="password">Password</label>
        <input onChange={signupUser} type="password" className=' form-control my-3' name='password' id='password' />



        <button  type='submit'  className='btn btn-outline-info'  > 
        {loding?<i className='fas fa-spinner fa-spin'></i>:"signup"}
        </button>

        {err?<div className='text-danger py-5' >{err}</div>:""}
        { errorList.map((error,index)=> <div key={index} className='text-danger  py-2' >{error.message}</div>) }


      </form>
    </div>
  )
}
