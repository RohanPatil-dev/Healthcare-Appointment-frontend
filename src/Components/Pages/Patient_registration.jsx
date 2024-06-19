import React, { useState,useEffect } from "react"

import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

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
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")

    const [users, setUsers] = useState([])

    useEffect(()=>{
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

    function signupData(event) {

        <ToastContainer/>

        event.preventDefault()

        if (!data.name && !data.phoneNumber && !data.gender && !data.age && !data.DOB && !data.bloodGroup && !data.email && !data.password && !data.address) {
            toast.error("Form is empty !")
            // alert("Form is empty !");
        }else if (!data.name) {
            toast.error("Please insert your Name !")
            // alert("Please insert your Name !");
        }  else if (!data.phoneNumber) {
            toast.error("Please insert your phoneNumber !")
            // alert("Please insert your phoneNumber !");
        } else if (data.phoneNumber.length > 10) {
            toast.error("You are entering phoneNumber characters over 10 characters !")
            // alert("You are entering phoneNumber characters over 10 characters  !");
        } else if (data.phoneNumber.length < 10) {
            toast.error("You are entering phoneNumber characters under 10 characters !")
            // alert("You are entering phoneNumber characters under 10 characters  !");
        } else if (!data.gender) {
            toast.error("Please select your Gender !")
            // alert("Please insert your Gender !");
        } else if (!data.age) {
            toast.error("Please insert your Age !")
            // alert("Please insert your Age !");
        } else if (!data.DOB) {
            toast.error("Please insert your date of birth !")
            // alert("Please insert your date of birth !");
        } else if (!data.bloodGroup) {
            toast.error("Please select your blood group !")
            // alert("Please insert your phoneNumber !");
        } else if (!data.email) {
            toast.error("Please insert your email !")
            // alert("Please insert your email !");
        } else if (!data.password) {
            toast.error("Please insert your password !")
            // alert("Please insert your password !");
        } else if (data.password.length > 8) {
            toast.error("You are entering password characters over 8 characters !")
            // alert("You are entering password characters over 8 characters !");
        } else if (data.password.length < 8) {
            toast.error("You are entering password characters under 8 characters !")
            // alert("You are entering password characters under 8 characters !");
        } else if (!data.address) {
            toast.error("Please insert your address !")
            // alert("Please insert your address !");
        } else {

            const result = axios.post("http://localhost:8081/user/register", data)

            let condition = users.find((value) => value.email === data.email)

            if(condition){
                toast.error("Email is already exist !")
            }else{
                toast.success("Success !")
                navigate("/")
            }
            
            // alert("Success !")

         
            // .then(data => {
            //     // localStorage.setItem("uid",JSON.stringify(data.data)),
            //     console.log(data)
            // }).catch((err) => {
            //     console.log(err);
            // })

            // if (result) {
            //     navigate("/")
            // }

        }
    }


    return (
        <>
            <ToastContainer/>

            <div className="doc-registrastion">
                <div id="register-img">
                    <img src="./images/register_doct.jpeg" alt="" />
                </div>

                <div id="register-form">
                <h1 className="heading">Patient Registration</h1>
                <form onSubmit={signupData}>
                    <div className="doc-gridy">
                        <div className="form-group">
                            <label htmlFor="exampleInputname">Name</label>
                             <img src="./images/name.png" alt="" id="name" />
                            <input type="text" value={name} className="form-control" id="exampleInputname" aria-describedby="emailHelp" onChange={(event) => { return setName(event.target.value) }} placeholder="Enter your Name............" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputphoneNumber">PhoneNumber</label>
                            <img src="./images/phone.png" alt="" id="phone" />
                            <input type="tel" value={phoneNumber} className="form-control" id="exampleInputphoneNumber" onChange={(event) => { return setPhoneNumber(event.target.value) }} placeholder="Enter your Number............." />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputAge">Age</label>
                            <img src="./images/age.png" alt="" id="age" />
                            <input type="number" value={age} className="form-control" id="exampleInputAge" onChange={(event) => { return setAge(event.target.value) }} placeholder="Enter your Age............" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputdate">Date Of Birth</label>
                            <img src="./images/birthdate.png" alt="" id="birthdate" />
                            <input type="date" value={DOB} className="form-control" min="2001-01-01" max="2024-06-11" id="exampleInputdate" onChange={(event) => { return setDOB(event.target.value) }} placeholder="Enter your Age............" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Blood Group</label>
                            <select className="form-control" id="exampleFormControlSelect1" value={bloodGroup} onChange={(event) => { return setBloodGroup(event.target.value) }} >
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
                            <img src="./images/email.png" alt="" id="emails" />
                            <input type="email" value={email} className="form-control" id="exampleInputemail" onChange={(event) => { return setEmail(event.target.value) }} aria-describedby="emailHelp" placeholder="Enter your email........" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputphoneNumber">Password</label>
                            <img src="./images/password.png" alt="" id="passwords" />
                            <input type="password" value={password} className="form-control" id="exampleInputpassword" onChange={(event) => { return setPassword(event.target.value) }} placeholder="Password" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputemail">Address</label>
                            <img src="./images/address.png" alt="" id="address" />
                            <input type="text" value={address} className="form-control" id="exampleInputaddress" onChange={(event) => { return setAddress(event.target.value) }} aria-describedby="emailHelp" placeholder="Enter your address............" />
                        </div>

                    </div>

                    <div className="form-check selection-btn">
                        <input className="form-check-input_1" type="checkbox" value={"Male"} name="male" id="male" onChange={(event) => { return setGender(event.target.value) }} /> <label htmlFor="male">Male</label>
                        <input className="form-check-input_2" type="checkbox" value={"Female"} name="female" id="female" onChange={(event) => { return setGender(event.target.value) }} /> <label htmlFor="female">Female</label>
                    </div>

                    <button type="submit" className="btn doc-reg-btn">Register</button>
                </form>
                </div>
            </div>
        </>
    )
}