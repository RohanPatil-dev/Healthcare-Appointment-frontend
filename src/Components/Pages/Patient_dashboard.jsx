import React, { useState, useEffect } from "react";

import Nav_dashboard from "./Nav_dashboard";

import axios from "axios";

import { useLocation } from "react-router-dom";

import Modal from "../Modal";

import { useNavigate } from "react-router-dom";

export default function Patient_dashboard() {

  const navigate = useNavigate()

  const location = useLocation()

  console.log(location);

  const[appointment,setAppointment] = useState([])

  const[doctors,setDoctors] = useState([])

  const[doctorId,setDoctorId] = useState(null)

  const[date,setDate] = useState(null)

  const patient = useLocation().state?.id


 useEffect(()=>{
     addAppointment()
     addDoctors()
 },[patient])


 function addAppointment(){
        axios.get(`http://localhost:8081/appointment/userAppointment?patiendId=${patient}`).then((value)=>{
           console.log("appointment",value.data);
          setAppointment(value.data)
        }).catch((err)=>{
          console.log(err);
        })
 }


 function addDoctors(){
     axios.get(`http://localhost:8081/doctor/docData`).then((value)=>{
      console.log("doctor",value.data);
         return setDoctors(value.data)
     }).catch((err)=>{
       return err
     })
 }

 const data = {
  doctor_id : doctorId,
  patient_id : patient,
  date : date,
  status : "Pending"
}

 function postAppointment(){
    axios.post("http://localhost:8081/appointment/userAppointment",data).then((data)=>{
          console.log(data);
          addAppointment()
    }).catch((err)=>{
       console.log(err);
    })
  
    
 }


 function doctorById(doctor_id){ 
   const id = doctors.find((value)=>{return value._id === doctor_id})

   if(id){
    return id.name
   }else{
     return "Doctor"
   }
 }


 function deleteAppointment(id){
    axios.delete(`http://localhost:8081/appointment/userAppointment/${id}`).then((value)=>{
       console.log(`${id} : data deleted successfully`);
    }).catch((err)=>{
       console.log(err);
    })
 }

  return (
    <>
      <Modal btn={postAppointment()} doctors={doctors} date={date} setDate={setDate} />

      <Nav_dashboard />

      <div className="patient-btn-div">
        <button className="btn patient-btn" data-toggle="modal" data-target="#exampleModal">Button</button>
      </div>

      <div className="container patient-dashboard text-center">
        <table className="table table-dark ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Patient ID</th>
              <th scope="col">Doctor ID</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
           {appointment.map((data,index)=>{
             return(
              <>
                 <tr key={index+1}>
                    <td>{index+1}</td>
                    <td>{data.patientId}</td>
                    <td>{doctorById(data._id)}</td>
                    <td>{data.date}</td>
                    <td>{data.status}</td>
                    <td><button className="delete-btn" onClick={()=>{deleteAppointment(data._id)}}>Delete</button></td>
                 </tr>
              </>
             )
           })}
          </tbody>
        </table>
      </div>
    </>
  )
}