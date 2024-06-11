import React from "react"

import { Select } from "antd"
const { Option } = Select;

export default function Modal() {
  return (
    <>
      {/* Modal  */}
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLabel" style={{marginLeft : "150px",fontWeight : "bold"}}>Appointment</h3>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div>
                <Select style={{ width: 200 }} className="select" placeholder="Select an Option.....">

                  <Option value="">Doc 1</Option>
                  <Option value="">Doc 2</Option>
                  <Option value="">Doc 3</Option>
                  <Option value="">Doc 4</Option>
                  <Option value="">Doc 5</Option>
                </Select>
              </div>

              <div>
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}