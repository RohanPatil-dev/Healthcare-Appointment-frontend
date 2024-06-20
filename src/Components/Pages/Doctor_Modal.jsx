import React from "react"

import { Select } from "antd"

const { Option } = Select;


export default function Doctor_Modal(props) {

    return (
        <>
            {/* Modal  */}
            <div className="modal fade" id="doctorModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{ backgroundColor: "#00308F", color: "white" }}>
                            <h3 className="modal-title" id="exampleModalLabel" style={{ marginLeft: "150px", fontWeight: "bold" }}>Patient Status</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                {/* <select style={{ width: 200 }} value={props.status} onChange={(event) => { props.setStatus(event.target.value) }} placeholder="Select status" className="select">
                                    <option value={"pending"}>Pending</option>
                                    <option value={"confirm"}>Confirm</option>
                                    <option value={"cancel"}>Cancel</option>
                                </select> */}

                                <select class="form-control doctor-modal" id="exampleFormControlSelect1" style={{ width: "300px", marginLeft: "90px" }} value={props.status} onChange={(event) => { props.setStatus(event.target.value) }} placeholder="Select status">
                                    <option selected disabled value="default">Please Select</option>
                                    <option value={"pending"}>Pending</option>
                                    <option value={"confirm"}>Confirm</option>
                                    <option value={"cancel"}>Cancel</option>
                                </select>
                            </div>

                            <div class="modal-footer" style={{ marginRight: "90px" }}>
                                <button type="button" class="btn btn-success" onClick={() => { props.updateStatus() }}>Save Appointment</button>
                                <button type="button" class="btn btn-danger close-modal" data-dismiss="modal">Close</button>
                            </div>

                            {/* <div>
                                <button className="btn btn-primary" onClick={() => { props.updateStatus() }}>Update Status</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}