import React, { useState, useEffect } from "react"

import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios"

import { useNavigate } from "react-router-dom"

export default function Doctor_signin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [doctor, setDoctors] = useState([])

  useEffect(() => {
    addDoctors()
  })

  const data = {
    email: email,
    password: password
  }

  async function signinData(event) {

    event.preventDefault()

    if (!data.email && !data.password) {
      toast.error("Form is empty !")
      // alert("Form is empty !")
    } else if (!data.email) {
      toast.error("Please insert your email !")
      //  alert("Please insert your email !")
    } else if (!data.password) {
      toast.error("Please insert your password !")
      //  alert("Please insert your password !")
    }
    else if (data.password.length > 8) {
      toast.error("You are entering password over 8 characters !")
      //  alert("You are entering password over 8 characters !");
    } else if (data.password.length < 8) {
      toast.error("You are entering password under 8 characters !")
      //  alert("You are entering password under 8 characters !");
    }
    else {

      const result = await axios.post("http://localhost:8081/doctor/docLogin", data)

      let condition = doctor.find((value) => value.email === result.data.email)

      console.log("condition", condition);

      if (!condition) {
        toast.error(`${result.data.error}`)
      } else {
        toast.success("success !")

        localStorage.setItem("uid", JSON.stringify(result.data))

        navigate("/doctor-dashboard")
      }

      // alert("success !")
    }
    // .then(data => 
    //                                       { localStorage.setItem("uid",JSON.stringify(data.data.msg))          
    //                                       }).catch((err) => {
    //                                          console.log(err);
    //                                        })

    //                         if(result) {
    //                                  navigate("/doctor-dashboard")
    //                          }
  }


  function addDoctors() {
    axios.get(`http://localhost:8081/doctor/docData`).then((value) => {
      console.log("doctor", value.data);
      return setDoctors(value.data)
    }).catch((err) => {
      return err
    })
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
                <label htmlFor="exampleInputEmail1">Email address</label>
                <img src="./images/email.png" alt="" id="email" />
                <input type="email" name="email" value={email} onChange={(event) => { return setEmail(event.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <img src="./images/password.png" alt="" id="password" />
                <input type="password" name="password" value={password} onChange={(event) => { return setPassword(event.target.value) }} className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
            </div>


            <button type="submit" className="btn doc-btn">LOGIN ACCOUNT</button>
          </form>
        </div>
      </div>
    </>
  )
}