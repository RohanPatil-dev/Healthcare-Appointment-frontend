import Modal from "../Modal";

export default function Patient_dashboard() {
  return (
    <>

        <Modal />

   <div className="patient-btn-div">
   <button class="btn patient-btn"  data-toggle="modal" data-target="#exampleModal">Button</button>
   </div>

      <div className="container patient-dashboard text-center">
        <table class="table table-dark ">
          <thead>
            <tr>
              <th scope="col">Patient ID</th>
              <th scope="col">Doctor ID</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}