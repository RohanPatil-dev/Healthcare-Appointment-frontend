import React, { useState } from "react"

import axios from "axios"

import { useNavigate } from "react-router-dom"

export default function Patient_registration() {


    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [gender, setGender] = useState("")
    const [age, setAge] = useState("")
    const [DOB, setDOB] = useState("")
    const [bloodGroup, setBloodGroup] = useState("")
    const [ email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")

    const data = {
        name: name,
        phoneNumber: phoneNumber,
        gender: gender,
        age: age,
        DOB: DOB,
        bloodGroup: bloodGroup,
        email: email,
        password: password,
        address: address
    }

    function signupData() {
        const result = axios.post("http://localhost:8081/user/register", data).then(data => 
                                              { 
                                                // localStorage.setItem("uid",JSON.stringify(data.data)),
                                                console.log(data)          
                                              }).catch((err) => {
                                                 console.log(err);
                                               })

                                if(result) {
                                         navigate("/")
                                 }
    }


    return (
        <>
            <h1 className="heading">Patient Registration</h1>

            <div className="container doc-registrastion">
             <form>
                    <div className="doc-gridy">
                        <div className="form-group">
                            <label htmlFor="exampleInputname">Name</label>
                            <input type="text" value={name} className="form-control" id="exampleInputname" aria-describedby="emailHelp" onChange={(event)=>{return setName(event.target.value) }} placeholder="Enter your Name............" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputphoneNumber">PhoneNumber</label>
                            <input type="tel" value={phoneNumber} className="form-control" id="exampleInputphoneNumber" onChange={(event)=>{return setPhoneNumber(event.target.value) }}  placeholder="Enter your Number............." />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputAge">Age</label>
                            <input type="number" value={age} className="form-control" id="exampleInputAge" onChange={(event)=>{return setAge(event.target.value) }}  placeholder="Enter your Age............" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputdate">Date Of Birth</label>
                            <input type="date" value={DOB} className="form-control" min="2001-01-01" max="2024-06-11" id="exampleInputdate" onChange={(event)=>{return setDOB(event.target.value) }}  placeholder="Enter your Age............" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Blood Group</label>
                            <select className="form-control" id="exampleFormControlSelect1" value={bloodGroup} onChange={(event)=>{return setBloodGroup(event.target.value) }} >
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputemail">Email</label>
                            <input type="email" value={email} className="form-control" id="exampleInputemail" onChange={(event)=>{return setEmail(event.target.value) }}  aria-describedby="emailHelp" placeholder="Enter your email........" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputphoneNumber">Password</label>
                            <input type="password" value={password} className="form-control" id="exampleInputpassword" onChange={(event)=>{return setPassword(event.target.value) }}  placeholder="Password" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputemail">Address</label> 
                            <input type="text" value={address} className="form-control" id="exampleInputaddress" onChange={(event)=>{return setAddress(event.target.value) }}  aria-describedby="emailHelp" placeholder="Enter your address............" />
                        </div>

                    </div>

                    <div className="form-check selection-btn">
                        <input className="form-check-input_1" type="checkbox" name="male" id="male" onChange={(event)=>{return setGender(event.target.value) }}  /> <label htmlFor="male">Male</label>
                        <input className="form-check-input_2" type="checkbox" name="female" id="female" onChange={(event)=>{return setGender(event.target.value) }}  /> <label htmlFor="female">Female</label>
                    </div>

                    <button type="submit" className="btn doc-btn" onClick={() => { signupData() }}>Submit</button>
                </form>
            </div>
        </>
    )
}