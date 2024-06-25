import React, { useState, useEffect } from "react"

import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios"

import { useNavigate } from "react-router-dom"

export default function Doctor_signin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

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
    
      const result = await axios.post("http://localhost:8081/doctor/docLogin", data)

      if(result.data.success){
        localStorage.setItem("token",result.data.token)
        localStorage.setItem("doctorId", result.data.doctorId)
        localStorage.setItem("userData", JSON.stringify(result.data.datas))
        navigate("/doctor-dashboard")
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
          <img src="./images/doctor.jpeg" alt="" id="doc-img" />
        </div>

        <div id="login-form">
          <h1 className="heading">Doctor Signin</h1>
          <p>Welcome back doctor ! please login to your account</p>
          <form onSubmit={signinData}>
            <div className="container doc-log-gridy">
              <div className="form-group">
                <img src="./images/email.png" alt="" id="email" />
                <input type="email" name="email" value={email} onChange={(event) => { return setEmail(event.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                <img src="./images/password.png" alt="" id="password" />
                <input type="password" name="password" value={password} onChange={(event) => { return setPassword(event.target.value) }} className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>

              <button type="submit" className="btn btn-primary doc-btn">LOGIN ACCOUNT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}