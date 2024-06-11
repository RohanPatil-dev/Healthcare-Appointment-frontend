import React, { useState } from "react"

import axios from "axios"

import { useNavigate } from "react-router-dom"


export default function Doctor_registration() {


  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [specialist, setSpecialist] = useState("")

  const data = {
    name: name,
    phoneNumber: phoneNumber,
    gender: gender,
    age: age,
    email: email,
    password: password,
    address: address,
    city: city,
    specialist: specialist
  }


  function signupData() {
    const result = axios.post("http://localhost:8081/doctor/docRegister", data).then(data => {
      // localStorage.setItem("uid",JSON.stringify(data.data)),
      console.log(data)
    }).catch((err) => {
      console.log(err);
    })

    if (result) {
      navigate("/")
    }
  }



  return (
    <>
      <h1 className="heading">Doctor Registration</h1>

      <div className="container doc-registrastion">
        <form>
          <div className="doc-gridy">
            <div className="form-group">
              <label for="exampleInputname">Name</label>
              <input type="text" name="name" value={name} onChange={(event) => { return setName(event.target.value) }} className="form-control" id="exampleInputname" aria-describedby="emailHelp" placeholder="Enter your Name............" />
            </div>

            <div className="form-group">
              <label for="exampleInputphoneNumber">PhoneNumber</label>
              <input type="tel" name="phoneNumber" value={phoneNumber} onChange={(event) => { return setPhoneNumber(event.target.value) }} className="form-control" id="exampleInputphoneNumber" placeholder="Enter your Number............." />
            </div>

            <div className="form-group">
              <label for="exampleInputAge">Age</label>
              <input type="number" name="age" value={age} onChange={(event) => { return setAge(event.target.value) }} className="form-control" id="exampleInputAge" placeholder="Enter your Age............" />
            </div>

            <div className="form-group">
              <label for="exampleInputemail">Email</label>
              <input type="email" name="email" value={email} onChange={(event) => { return setEmail(event.target.value) }} className="form-control" id="exampleInputemail" aria-describedby="emailHelp" placeholder="Enter your email........" />
            </div>

            <div className="form-group">
              <label for="exampleInputphoneNumber">Password</label>
              <input type="password" name="password" value={password} onChange={(event) => { return setPassword(event.target.value) }} className="form-control" id="exampleInputpassword" placeholder="Password" />
            </div>

            <div className="form-group">
              <label for="exampleInputemail">Address</label>
              <input type="text" name="address" value={address} onChange={(event) => { return setAddress(event.target.value) }} className="form-control" id="exampleInputaddress" aria-describedby="emailHelp" placeholder="Enter your address............" />
            </div>

            <div className="form-group">
              <label for="exampleInputcity">City</label>
              <input type="text" name="city" value={city} onChange={(event) => { return setCity(event.target.value) }} className="form-control" id="exampleInputcity" placeholder="Enter your city.........." />
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">Specialist</label>
              <select class="form-control" name="specialist" value={specialist} onChange={(event) => { return setSpecialist(event.target.value) }} id="exampleFormControlSelect1">
                <option>Cardiology</option>
                <option>Virology</option>
                <option>Dermatology</option>
                <option>Optometry</option>
              </select>
            </div>
          </div>

          <div className="form-check selection-btn">
            <input className="form-check-input_1" type="checkbox" name="male" id="male" onChange={(event) => { return setGender(event.target.value) }} /> <label htmlFor="male">Male</label>
            <input className="form-check-input_2" type="checkbox" name="female" id="female" onChange={(event) => { return setGender(event.target.value) }} /> <label htmlFor="female">Female</label>
          </div>

          <button type="submit" className="btn doc-btn" onClick={() => { signupData() }}>Submit</button>
        </form>
      </div>
    </>
  )
}