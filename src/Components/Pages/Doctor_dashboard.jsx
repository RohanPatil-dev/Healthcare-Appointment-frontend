import React, { useState, useEffect } from "react"

import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import { useLocation } from "react-router-dom";

import Doctor_Modal from "./Doctor_Modal"
import Nav_dashboard from "./Nav_dashboard"


import axios from "axios";

export default function Doctor_dashboard() {

    const location = useLocation()

    const [appointments, setAppointments] = useState([])

    console.log("appointments", appointments);

    // selectedAppointment
    const [users, setUsers] = useState([])

    console.log("users",users);

    const [status, setStatus] = useState(users.status)

    console.log("status", status);

    const [selectedAppointment,setSelectedAppointment] = useState([])

    const local = JSON.parse(localStorage.getItem("uid"))

    console.log("local", local._id);

    useEffect(() => {
        allData()
        allPatients()
    }, [local._id])


    function allData() {
        // http://localhost:8081/appointment/appointmentsByPatient?patientId=6666c50eaa856f76ffcdae19
        axios
            .get(`http://localhost:8081/appointment/appointmentsByDoctor?doctorId=${local._id}`)
            .then((response) => {
                setAppointments(response.data.task);
            }).catch(err => console.log(err))
    }


    // function allData() {
    //     axios.get("http://localhost:8081/appointment/userAppointment", { params: { doctor: id } }).then((value) => {
    //         setAppointments(value.data)
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }


    function allPatients() {
        axios.get("http://localhost:8081/user/allPatient").then((value) => {
            setUsers(value.data)
        }).catch((err) => {
            console.log(err);
        })
    }


    function getDoctor(id) {
        var getDocId = id

        setSelectedAppointment(getDocId)
        console.log("getDocId",getDocId);
    }


    function updateStatus() {

        if(status === undefined){
            toast.error("Choose your status !")
        //    alert("Choose your status !")
        }else{
            toast.success("Status updated successfully !")
            // alert("Status updated successfully !")

            const result = axios.put(`http://localhost:8081/appointment/userAppointmentUpdate/${selectedAppointment._id}`, { status }).then((value)=>{
                
                console.log("result",value.data);
                console.log("res",result.data);
    
                console.log("success !");
    
               setStatus(undefined)
               
               allPatients()
                 allData()
            })
        }

    }

    function getPatientName(id){
        const patient = users.find((value) => value._id === id)

        return patient ? patient.name : "Unknown Patient"
    }


    return (
        <>
    <ToastContainer/>

            <Doctor_Modal users={users} updateStatus={updateStatus} status={status} setStatus={setStatus} />

            <Nav_dashboard />
            <div className="container patient-dashboard text-center">
                <table className="table table-dark ">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Patient</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {appointments && appointments.map((data, index) => {
                            return (
                                <>
                                    <tr key={index + 1}>
                                        <th scope="row">{index + 1}</th>
                                        <th scope="row">{getPatientName(data.patientId)}</th>
                                        <td className="doc">{data.date}</td>
                                        <td className="doc">{data.status}</td>
                                        <td><button className="btn btn-primary action" onClick={()=>{getDoctor(data)}} data-toggle="modal" data-target="#doctorModal">Status</button></td>
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