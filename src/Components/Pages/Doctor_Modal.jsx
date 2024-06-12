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
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel" style={{ marginLeft: "150px", fontWeight: "bold" }}>Patient Status</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <Select style={{ width: 200 }} className="select" name="status" value="" onChange={()=>{}} placeholder="Select an Status.....">

                                    <Option value={"pending"}>Pending</Option>
                                    <Option value={"complete"}>Complete</Option>
                                    <Option value={"cancel"}>Cancel</Option>
                                </Select>
                            </div>

                            <div>
                                <button className="btn btn-primary" onClick={()=>{props.updateStatus()}}>Update Status</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}