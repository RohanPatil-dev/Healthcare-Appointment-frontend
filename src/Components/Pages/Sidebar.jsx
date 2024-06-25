import React from "react"

import { IconContext } from "react-icons"

import { Link, useNavigate } from "react-router-dom"

export default function Sidebar(props) {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()

        navigate("/")
    }

    const local = JSON.parse(localStorage.getItem("userData"))

    return (
        <>
            <IconContext.Provider value={{ color: "white" }}>
                <div className={`${props.sidebar ? "nav-menu active" : "nav-menu"} sidebar `} >
                    <div className="nav-menu-items logo" onClick={props.showSidebar}>
                        <div className="logo_content">
                            <div id="dashboard_name">Meadiactive Hospital</div>

                        </div>

                        <ul className="nav_list">
                            <li className="text-light user-info">
                                <img src="./images/user.png" alt="" class="icons" /><span className="text">{!(local.name.length <= 15) ? String(local.name).slice(0,10)+"..." : local.name}</span>
                            </li>

                            <li className="text-light user-info"> <img src="./images/contact.png" alt="" class="icons" /><span className="text">{local.phoneNumber}</span></li>

                            <li className="text-light user-info"> <img src="./images/ages.png" alt="" class="icons" /><span className="text">{local.age}</span> <span className="text">years old</span></li>

                            <li>
                                <Link className="user-info" style={{ position: "relative", right: "16px" }} onClick={() => { logout() }} to="/">
                                    <img src="./images/logout.png" alt="" class="icons" />
                                    <span>Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </IconContext.Provider>
        </>


    )
}