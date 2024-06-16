import React, { useState } from "react"

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

      toast.success("success !")
      // alert("success !")

      const result = await axios.post("http://localhost:8081/doctor/docLogin", data)

      localStorage.setItem("uid", JSON.stringify(result.data.msg))

      navigate("/doctor-dashboard")

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


  return (
    <>

      <ToastContainer />

      <h1 className="heading">Doctor Signin</h1>

      <div className="container doc-log">

        <form onSubmit={signinData}>
          <div className="container doc-log-gridy">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" name="email" value={email} onChange={(event) => { return setEmail(event.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" name="password" value={password} onChange={(event) => { return setPassword(event.target.value) }} className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
          </div>


          <button type="submit" className="btn doc-btn">Submit</button>
        </form>
      </div>
    </>
  )
}