import React from "react"

import { Select } from "antd"
const { Option } = Select;

export default function Doctor_Modal() {
    return (
        <>
            {/* Modal  */}
            <div class="modal fade" id="doctorModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="exampleModalLabel" style={{ marginLeft: "150px", fontWeight: "bold" }}>Patient Status</h3>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div>
                                <Select style={{ width: 200 }} className="select" placeholder="Select an Status.....">

                                    <Option value={"pending"}>Pending</Option>
                                    <Option value={"complete"}>Complete</Option>
                                    <Option value={"cancel"}>Cancel</Option>
                                </Select>
                            </div>

                            <div>
                                <button className="btn btn-primary">Update Status</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}