import React from "react"

import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark  p-2">
                <Link className="navbar-brand Logo_name ml-5" href="#">Mediactive</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto nav-inner-container">
                        <li className="nav-item active">
                            <Link className="nav-link link-name" to="/">product</Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link link-name" to="/add">add product</Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link link-name" to="/update">update product</Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link link-name" to="/logout">logout</Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link link-name" to="/profile">logout</Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link link-name" to="/signup">Signup</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}