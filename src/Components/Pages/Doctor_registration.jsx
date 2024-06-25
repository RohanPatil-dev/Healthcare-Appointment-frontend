import React, { useState, useEffect } from "react"

import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

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

  const [doctor, setDoctors] = useState([])

  useEffect(() => {
    addDoctors()
  })

  function addDoctors() {
    axios.get(`http://localhost:8081/doctor/docData`).then((value) => {
      console.log("doctor", value.data);
      return setDoctors(value.data)
    }).catch((err) => {
      return err
    })
  }

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


  function signupData(event) {

    event.preventDefault()

    if (!data.name && !data.phoneNumber && !data.gender && !data.age && !data.email && !data.password && !data.address && !data.city && !data.specialist) {
      toast.error("Form is empty !")
    } else if (!data.name) {
      toast.error("Please insert your Name !")
    } else if (!data.phoneNumber) {
      toast.error("Please insert your phoneNumber !")
    } else if (data.phoneNumber.length > 10) {
      toast.error("You are entering phoneNumber characters over 10 characters !")
    } else if (data.phoneNumber.length < 10) {
      toast.error("You are entering phoneNumber characters under 10 characters !")
    } else if (!data.gender) {
      toast.error("Please select your Gender !")
    } else if (!data.age) {
      toast.error("Please insert your Age !")
    } else if (!data.email) {
      toast.error("Please insert your email !")
    } else if (!data.password) {
      toast.error("Please insert your password !")
    } else if (data.password.length > 8) {
      toast.error("You are entering password characters over 8 characters !")
    } else if (data.password.length < 8) {
      toast.error("You are entering password characters under 8 characters !")
    } else if (!data.address) {
      toast.error("Please insert your address !")
    } else if (!data.city) {
      toast.error("Please insert your city !")
    } else if (!data.specialist) {
      toast.error("Please select your speciality !")
    } else {
      const result = axios.post("http://localhost:8081/doctor/docRegister", data)
      let condition = doctor.find((value) => value.email === data.email)

      if (condition) {
        toast.error("Email is already exist !")
      } else {
        toast.success("Success !")
        navigate("/doc-login")
      }
    }
  }

  return (
    <>
      <ToastContainer />


      <div className="registration-container">
        <div className="row no-gutters">
          <div className="col-md-6">
            <div className="image-container">
              <img src="./images/doc-medical.jpeg" alt="Left Image" className="register-image" />
            </div>
          </div>
          <div className="col-md-6" style={{ position: "relative", bottom: "30px", right: "300px" }}>
            <div className="login d-flex align-items-center py-5" style={{ width: "80rem" }}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <div className="card shadow-lg p-4 register-div">
                      <h1 className="heading text-primary">Doctor Registration</h1>
                      <p className="message">Welcome ! please create your new account</p>

                      <form onSubmit={signupData}>
                        <div className="doc-gridy">
                          <div className="form-group">
                            <input type="text" name="name" value={name} onChange={(event) => { return setName(event.target.value) }} className="form-control" id="exampleInputname" aria-describedby="emailHelp" placeholder="Enter your Name............" />
                          </div>

                          <div className="form-group">
                            <input type="tel" name="phoneNumber" value={phoneNumber} onChange={(event) => { return setPhoneNumber(event.target.value) }} className="form-control" id="exampleInputphoneNumber" placeholder="Enter your Number............." />
                          </div>

                          <div className="form-group">
                            <input type="number" name="age" value={age} onChange={(event) => { return setAge(event.target.value) }} className="form-control" id="exampleInputAge" placeholder="Enter your Age............" />
                          </div>

                          <div className="form-group">
                            <input type="email" name="email" value={email} onChange={(event) => { return setEmail(event.target.value) }} className="form-control" id="exampleInputemail" aria-describedby="emailHelp" placeholder="Enter your email........" />
                          </div>

                          <div className="form-group">
                            <input type="password" name="password" value={password} onChange={(event) => { return setPassword(event.target.value) }} className="form-control" id="exampleInputpassword" placeholder="Password" />
                          </div>

                          <div className="form-group">
                            <input type="text" name="address" value={address} onChange={(event) => { return setAddress(event.target.value) }} className="form-control" id="exampleInputaddress" aria-describedby="emailHelp" placeholder="Enter your address............" />
                          </div>

                          <div className="form-group">
                            <input type="text" name="city" value={city} onChange={(event) => { return setCity(event.target.value) }} className="form-control" id="exampleInputcity" placeholder="Enter your city.........." />
                          </div>

                          <div class="form-group">
                            <select class="form-control" name="specialist" value={specialist} onChange={(event) => { return setSpecialist(event.target.value) }} id="exampleFormControlSelect1">
                              <option>Cardiology</option>
                              <option>Virology</option>
                              <option>Dermatology</option>
                              <option>Optometry</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-check selection-btn">
                          <input className="form-check-input_1" type="checkbox" value={"Male"} name="male" id="male" onChange={(event) => { return setGender(event.target.value) }} /> <label htmlFor="male" style={{ fontSize: "20px" }}>Male</label>
                          <input className="form-check-input_2" type="checkbox" value={"Female"} name="female" id="female" onChange={(event) => { return setGender(event.target.value) }} /> <label htmlFor="female" style={{ fontSize: "20px" }}>Female</label>
                        </div>

                        <button type="submit" className="btn btn-primary register-btn">REGISTER ACCOUNT</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}