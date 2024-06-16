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

  const [appointment, setAppointment] = useState([])

  console.log("appointment", appointment);

  const [doctors, setDoctors] = useState([])

  const [doctorId, setDoctorId] = useState("")

  const [date, setDate] = useState("")

  // const patient = useLocation().state?.id

  const local = JSON.parse(localStorage.getItem("uid"))

  console.log("local", local._id);

  useEffect(() => {
    addAppointment()
    addDoctors()
  }, [local._id])


  function addAppointment() {
    // http://localhost:8081/appointment/appointmentsByPatient?patientId=6666c50eaa856f76ffcdae19
    axios
      .get(`http://localhost:8081/appointment/appointmentsByPatient?patientId=${local._id}`)
      .then((response) => {
        setAppointment(response.data.task);
      }).catch(err => console.log(err))
  }


  //  function addAppointment(){
  //         axios.get(`http://localhost:8081/appointment/userAppointment`).then((value)=>{
  //            console.log("appointment",value.data);
  //           setAppointment(value.data)
  //         }).catch((err)=>{
  //           console.log(err);
  //         })
  //  }


  function addDoctors() {
    axios.get(`http://localhost:8081/doctor/docData`).then((value) => {
      console.log("doctor", value.data);
      return setDoctors(value.data)
    }).catch((err) => {
      return err
    })
  }

  function postAppointment() {
    const data = {
      patientId: local._id,
      doctorId: doctorId,
      date: date,
      status: "pending"
    }

    if (doctorId === "") {
       alert("Doctor doesn't selected !")
    }else if(date === ""){
      alert("Date doesn't selected !")
    }else{

      alert("success !")

      axios.post("http://localhost:8081/appointment/userAppointment", data).then((data) => {
        console.log(data);
        console.log("success");
        addAppointment()
      }).catch((err) => {
        console.log(err);
        console.log("err");
      })
  
    }
  }

  function deleteAppointment(id) {

    alert("Appointment deleted successfully !")

    axios.delete(`http://localhost:8081/appointment/userAppointmentDelete/${id}`).then((value) => {
      console.log(`${id} : data deleted successfully`);
      addAppointment()
    }).catch((err) => {
      console.log(err);
    })
  }


  function getDocName(id) {
    const doctor = doctors.find((value) => value._id === id)

    return doctor ? doctor.name : "Unknown Doctor"
  }


  return (
    <>
      <Modal btn={postAppointment} doctors={doctors} date={date} setDate={setDate} doctorId={doctorId} setDoctorId={setDoctorId} />

      <Nav_dashboard />

      <div className="patient-btn-div">
        <button className="btn patient-btn" data-toggle="modal" data-target="#exampleModal">Button</button>
      </div>

      <div className="container patient-dashboard text-center">
        <table className="table table-dark ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Doctor Name</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointment && appointment.map((data, index) => {
              return (
                <>
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{getDocName(data.doctorId)}</td>
                    <td>{data.date}</td>
                    <td>{data.status}</td>
                    <td><button className="delete-btn" onClick={() => { deleteAppointment(data._id) }}>Delete</button></td>
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