import axios from 'axios'
import Joi from 'joi'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(props) {
  let navgate=useNavigate()
  const [err, seterr] = useState("")
  const [errorList, seterrorList] = useState([])
  const [loding, setlod] = useState(false)
  const [disabled, setdisabled] = useState(false)
  const [user, setUser] = useState({

    email: "",
    password: "",

  })
  // ----------------------------
  function LoginUser(event) {
    const myuser = { ...user }
    myuser[event.target.name] = event.target.value
    setUser(myuser)
    if (event.target.value > 0) {
      setdisabled(false)
    }
  }
  // ================================
  async function submitLogin(e) {
    e.preventDefault()
    let validationResult = validation(user)
    console.log(validationResult)
    if (validationResult.error) {

      seterrorList(validationResult.error.details)
    } else {
      setlod(true)
      seterrorList([])
      let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signin`, user)
      if (data.message === "success") {
        localStorage.setItem("usertoken",data.token)
        setlod(false)
        props.getuserData()
        navgate("/home")
      } else {
        seterr(data.message)
        setlod(false)

      }
    }

  }
  // ---------------------------------------------------
  // --------------------------------
  function validation(user) {
    let schema = Joi.object({

      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
    })
    return schema.validate(user, { abortEarly: false })
  }

  // --------------------------------
  return (
    <div>
      <h2 className=' my-5'>Login naw</h2>

      <form onSubmit={submitLogin}>


        <label htmlFor="email">email</label>
        <input onChange={LoginUser} type="email" className=' form-control my-3' name='email' id='email' />

        <label htmlFor="password">Password</label>
        <input onChange={LoginUser} type="password" className=' form-control my-3' name='password' id='password' />



        <button type='submit' disabled={disabled} className='btn btn-outline-info'  >
          {loding ? <i className='fas fa-spinner fa-spin'></i> : "Login"}
        </button>

        {err ? <div className='text-danger py-5' >{err}</div> : ""}
        {errorList.map((error, index) => <div key={index} className='text-danger py-5' >{error.message}</div>)}


      </form>
    </div>
  )
}
