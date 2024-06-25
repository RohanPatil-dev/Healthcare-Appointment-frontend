import React, { useState, useEffect } from "react"

import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios"

import { useNavigate } from "react-router-dom"

export default function Patient_login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [users, setUsers] = useState([])

  useEffect(() => {
    allPatients()
  })

  function allPatients() {
    axios.get("http://localhost:8081/user/allPatient").then((value) => {
      setUsers(value.data)
    }).catch((err) => {
      console.log(err);
    })
  }

  const data = {
    email: email,
    password: password
  }

  async function signinData(event) {
    event.preventDefault()

    if (!data.email && !data.password) {
      toast.error("Form is empty !")
    } else if (!data.email) {
      toast.error("Please insert your email !")
    } else if (!data.password) {
      toast.error("Please insert your password !")
    }
    else if (data.password.length > 8) {
      toast.error("You are entering password characters over 8 characters !")
    } else if (data.password.length < 8) {
      toast.error("You are entering password characters under 8 characters !")
    }
    else {
      const result = await axios.post("http://localhost:8081/user/login", data)

      if(result.data.success){
        localStorage.setItem("token",result.data.token)
        localStorage.setItem("patientId", result.data.patientId)
        localStorage.setItem("userData", JSON.stringify(result.data.datas))
        navigate("/patient-dashboard")
      }else{
        toast.error("Email or Password is invalid !")
      }
    }
  }


  return (
    <>
      <ToastContainer />


      <div className="doc-log">
        <div id="log-img">
          <h3>Mediactive <span>Healthcare</span></h3>
          <img src="./images/login.jpeg" alt="" />
        </div>

        <div id="login-form">
          <h1 className="heading text-primary">Healthcare</h1>
          <p>Welcome back ! please login to your account</p>
          <form onSubmit={signinData}>
            <div className="container doc-log-gridy">
              <div className="form-group">
                <img src="./images/email.png" alt="" id="email" />
                <input type="email" name="email" value={email} onChange={(event) => { return setEmail(event.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    
                <img src="./images/password.png" alt="" id="password" />
                <input type="password" name="password" value={password} onChange={(event) => { return setPassword(event.target.value) }} className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <button type="submit" className="btn doc-btn btn-primary">LOGIN ACCOUNT</button>
            </div>


          
          </form>
        </div>
      </div>
    </>
  )
}