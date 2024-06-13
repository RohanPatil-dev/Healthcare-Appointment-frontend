import React, { useState, useEffect } from "react"

import { useLocation } from "react-router-dom";

import Doctor_Modal from "./Doctor_Modal"
import Nav_dashboard from "./Nav_dashboard"


import axios from "axios";

export default function Doctor_dashboard() {

    const location = useLocation()

    const [appointments, setAppointments] = useState([])

    const [users, setUsers] = useState([])

    const [status, setStatus] = useState(appointments.status)

    const { user, id } = useLocation()

    useEffect(() => {
        allData()
        allPatients()
    }, [])


    function allData() {
        axios.get("http://localhost:8081/appointment/userAppointment", { params: { doctor: id } }).then((value) => {
            setAppointments(value.data)
        }).catch((err) => {
            console.log(err);
        })
    }


    function allPatients() {
        axios.get("http://localhost:8081/user/allPatient").then((value) => {
            setUsers(value.data)
        }).catch((err) => {
            console.log(err);
        })
    }


    function updateStatus(id, status) {
        const result = axios.put(`http://localhost:8081/appointment/userAppointment/${appointments._id}`, { status })

        setAppointments(appointments.map((data) => data._id === id ? { ...appointments,status:  result.data.status } : appointments))
    }


    return (
        <>
            <Doctor_Modal updateStatus={updateStatus} status={status} setStatus={setStatus} />

            <Nav_dashboard />
            <div className="container patient-dashboard text-center">
                <table className="table table-dark ">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Patient ID</th>
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
                                        <th scope="row">{data.patientId}</th>
                                        <td className="doc">{data.date}</td>
                                        <td className="doc">{data.status}</td>
                                        <td><button className="btn btn-primary action" data-toggle="modal" data-target="#doctorModal">Status</button></td>
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