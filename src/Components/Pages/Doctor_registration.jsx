import React from "react"

export default function Doctor_registration() {
  return (
    <>
        <h1 className="heading">Doctor Registration</h1>
     
      <div className="container doc-registrastion">
        <form>
          <div className="doc-gridy">
            <div className="form-group">
              <label for="exampleInputname">Name</label>
              <input type="text" className="form-control" id="exampleInputname" aria-describedby="emailHelp" placeholder="Enter your Name............" />
            </div>

            <div className="form-group">
              <label for="exampleInputphoneNumber">PhoneNumber</label>
              <input type="tel" className="form-control" id="exampleInputphoneNumber" placeholder="Enter your Number............." />
            </div>

            <div className="form-group">
              <label for="exampleInputAge">Age</label>
              <input type="number" className="form-control" id="exampleInputAge" placeholder="Enter your Age............" />
            </div>

            <div className="form-group">
              <label for="exampleInputemail">Email</label>
              <input type="email" className="form-control" id="exampleInputemail" aria-describedby="emailHelp" placeholder="Enter your email........" />
            </div>

            <div className="form-group">
              <label for="exampleInputphoneNumber">Password</label>
              <input type="password" className="form-control" id="exampleInputpassword" placeholder="Password" />
            </div>

            <div className="form-group">
              <label for="exampleInputemail">Address</label>
              <input type="text" className="form-control" id="exampleInputaddress" aria-describedby="emailHelp" placeholder="Enter your address............" />
            </div>

            <div className="form-group">
              <label for="exampleInputcity">City</label>
              <input type="text" className="form-control" id="exampleInputcity" placeholder="Enter your city.........." />
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">Specialist</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Cardiology</option>
                <option>Virology</option>
                <option>Dermatology</option>
                <option>Optometry</option>
              </select>
            </div>
          </div>

          <div className="form-check selection-btn">
                <input className="form-check-input_1" type="checkbox" value="Male" id="male" /> <label htmlFor="male">Male</label>
                <input className="form-check-input_2" type="checkbox" value="Female" id="female" /> <label htmlFor="female">Female</label>
            </div>

          <button type="submit" className="btn doc-btn">Submit</button>
        </form>
      </div>
    </>
  )
}