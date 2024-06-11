import React from "react"

export default function Doctor_dashboard() {
    return (
        <>
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
                            <td className="doc">
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option value={"pending"}>Pending</option>
                                    <option value={"complete"}>Complete</option>
                                    <option value={"cancel"}>Cancel</option>
                                </select>
                            </td>
                            <td><button className="btn btn-primary action">Status</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}