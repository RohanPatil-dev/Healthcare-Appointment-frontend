import React from "react"

import { Link,useNavigate } from "react-router-dom"

export default function Nav_dashboard() {

    const navigate = useNavigate()

    const auth = localStorage.getItem("uid")

    const logout = () =>{
        localStorage.removeItem("uid")

        navigate("/")
    }
    


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark  p-2">
                <img src="./images/Template.png" className="img" alt="" />
                <Link className="navbar-brand Logo_name ml-5" href="#">Mediactive</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto link-value">
                        <li className="nav-item active">
                         <Link className="nav-link link-name" onClick={()=>{logout()}} to="/">Logout</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}