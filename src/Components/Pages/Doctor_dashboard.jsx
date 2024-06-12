import React from "react"
import Doctor_Modal from "./Doctor_Modal"

export default function Doctor_dashboard() {
    return (
        <>

        <Doctor_Modal/>
        
            <div className="container patient-dashboard text-center">
                <table class="table table-dark ">
                    <thead>
                        <tr>
                            <th scope="col">Patient ID</th>
                            <th scope="col">Doctor ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td className="doc">Mark</td>
                            <td className="doc">Otto</td>
                            <td className="doc">Pending</td>
                            <td><button className="btn btn-primary action" data-toggle="modal" data-target="#doctorModal">Status</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}