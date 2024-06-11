import React from "react"

export default function Patient_registration() {
    return (
        <>
            <h1 className="heading">Patient Registration</h1> 

            <div className="container doc-registrastion">
                <form>
                    <div className="doc-gridy">
                        <div className="form-group">
                            <label for="exampleInputname">Name</label>
                            <input type="text" className="form-control" id="exampleInputname" aria-describedby="emailHelp" placeholder="Enter your Name............" />
                        </div>

                        <div className="form-group">
                            <label for="exampleInputphoneNumber">PhoneNumber</label>
                            <input type="tel" className="form-control" id="exampleInputphoneNumber" placeholder="Enter your Number............." />
                        </div>

                        <div className="form-group">
                            <label for="exampleInputAge">Age</label>
                            <input type="number" className="form-control" id="exampleInputAge" placeholder="Enter your Age............" />
                        </div>

                        <div className="form-group">
                            <label for="exampleInputAge">Date Of Birth</label>
                            <input type="date" className="form-control" min="2001-01-01" max="2024-06-11" id="exampleInputAge" placeholder="Enter your Age............" />
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Blood Group</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label for="exampleInputemail">Email</label>
                            <input type="email" className="form-control" id="exampleInputemail" aria-describedby="emailHelp" placeholder="Enter your email........" />
                        </div>

                        <div className="form-group">
                            <label for="exampleInputphoneNumber">Password</label>
                            <input type="password" className="form-control" id="exampleInputpassword" placeholder="Password" />
                        </div>

                        <div className="form-group">
                            <label for="exampleInputemail">Address</label>
                            <input type="text" className="form-control" id="exampleInputaddress" aria-describedby="emailHelp" placeholder="Enter your address............" />
                        </div>

                    </div>

                    <div className="form-check selection-btn">
                        <input className="form-check-input_1" type="checkbox" value="Male" id="male" /> <label htmlFor="male">Male</label>
                        <input className="form-check-input_2" type="checkbox" value="Female" id="female" /> <label htmlFor="female">Female</label>
                    </div>

                    <button type="submit" className="btn doc-btn">Submit</button>
                </form>
            </div>
        </>
    )
}