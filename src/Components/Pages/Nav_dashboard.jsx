import React,{useState} from "react"

import Sidebar from "./Sidebar";

export default function Nav_dashboard() {

    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => {return setSidebar(!sidebar)}
  
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light  p-2">
                <img src="./images/Template.png" className="img" alt="" />
                <p className="navbar-brand Logo_name ml-5" href="#">Mediactive</p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto link-value">
                    </ul>

                </div>

                <button type="button" className="btn btn-info" id="pop_up" onClick={showSidebar}><img src="./images/menu-line.png" alt="" /> </button>
            </nav>

            <Sidebar showSidebar={showSidebar} sidebar={sidebar} />
        </>
    )
}