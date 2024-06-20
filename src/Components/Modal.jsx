import React from "react"

import { Select } from "antd"
const { Option } = Select;

export default function Modal(props) {

  let doctors = props.doctors

  return (
    <>
      {/* Modal  */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header" style={{backgroundColor : "#00308F",color : "white"}}>
              <h3 className="modal-title" id="exampleModalLabel" style={{ marginLeft: "100px", fontWeight: "bold"}}>Appointment Selection</h3>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div>
                <Select style={{ width: 200 }} name="doctorId" className="select select-modal" value={props.doctorId} onChange={(value) => { return props.setDoctorId(value) }} placeholder="Select an Option.....">

                  {doctors.map((data, index) => {
                    return (
                      <>
                        <Option key={index + 1} value={data._id}>{data.name}</Option>
                      </>
                    )
                  })}
                  {/*                  
                  <Option value="">Doc 2</Option>
                  <Option value="">Doc 3</Option>
                  <Option value="">Doc 4</Option>
                  <Option value="">Doc 5</Option> */}
                </Select>
              </div>

              <input type="date" name="date" id="" value={props.date} onChange={(event) => { return props.setDate(event.target.value) }} />

              <div class="modal-footer">
                <button type="button" class="btn btn-success" onClick={() => { props.btn() }}>Save Appointment</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
              {/* <div>
                <button className="btn btn-primary" onClick={()=>{props.btn()}}>Submit</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}