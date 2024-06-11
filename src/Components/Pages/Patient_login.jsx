import React from "react"

export default function Patient_login() {
  return (
    <>
       <h1 className="heading">Patient Signin</h1>

       <div className="container doc-log">

            <form>
                <div className="container doc-log-gridy">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                </div>


                <button type="submit" class="btn doc-btn">Submit</button>
            </form>
            </div>
    </>
  )
}