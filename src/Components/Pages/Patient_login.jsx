import React, { useState } from "react"

import axios from "axios"

import { useNavigate } from "react-router-dom"

export default function Patient_login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const data = {
    email: email,
    password: password
  }


  function signinData() {
    const result = axios.post("http://localhost:8081/user/login", data).then(data => 
                                          { localStorage.setItem("uid",JSON.stringify(data.data.msg),
                                            console.log(data))          
                                          }).catch((err) => {
                                             console.log(err);
                                           })

                            if(result) {
                                     navigate("/patient-dashboard")
                             }
}


  return (
    <>
       <h1 className="heading">Patient Signin</h1>

       <div className="container doc-log">

            <form>
                <div className="container doc-log-gridy">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" value={email} onChange={(event)=>{return setEmail(event.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name="password" value={password} onChange={(event)=>{return setPassword(event.target.value)}} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                </div>


                <button type="submit" className="btn doc-btn"  onClick={() => { signinData() }}>Submit</button>
            </form>
            </div>
    </>
  )
}