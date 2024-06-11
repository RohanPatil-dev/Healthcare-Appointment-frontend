import React from "react"

import "../CSS/Navbar.css"

import {Outlet,Link} from "react-router-dom"

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark  p-2">
                <img src="./images/Template.png" className="img" alt="" />
                <Link className="navbar-brand Logo_name ml-5" href="#">Mediactive</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto nav-inner-container">
                        <li className="nav-item active">
                            <Link className="nav-link link-name" to="/">Patient Login</Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link link-name" to="/register">Patient Register</Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link link-name" to="/doc-login">Doctor Login</Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link link-name" to="/doc-register">Doctor Registration</Link>
                        </li>
                    </ul>

                </div>
            </nav>
            <Outlet/>
        </>
    )
}