export default function Doctor_profile() {
    return (
        <>
            <div className="profile-main-div">
                <div className="profile-grid">
                    <div className="profile-img"><img src="./images/profile.png" alt="" /></div>
                    <div className="profile-description">
                        <div className="description-container">
                            <div style={{ position: "relative", bottom: "35px" }}>
                                <p className="description-heading">PROFILE</p>

                                <p className="doctor-name">Name : Dr. James Graham</p>
                                <p className="doctor-studies">MBBS</p>
                                <p className="hospital-address">Mediacare hospitals, Newark, USA</p>
                            </div>

                            <div style={{ position: "relative", bottom: "35px" }}>
                                <p className="description-heading">SPECIALITY</p>
                                <span className="speciality-name">Neurology</span>
                            </div>

                            <div style={{ position: "relative", bottom: "10px" }}>
                                <p className="description-heading" >EXPERIENCE</p>
                                <p className="hospital-experience">20 Years +</p>
                            </div>

                            <div style={{ position: "relative", bottom: "10px" }}>
                                <p className="description-heading">EMAIL</p>
                                <p className="hospital-experience">rohanpatil@gmail.com</p>
                            </div>

                            <div style={{ position: "relative", bottom: "125px", left: "250px" }}>
                                <p className="description-heading mt-5">CONTACT</p>
                                <p className="hospital-experience">+91 7796326760</p>
                            </div>

                            <div style={{ position: "relative", bottom: "100px" }}>
                                <p className="description-heading">ADDRESS</p>
                                <p className="hospital-experience">City : <span>California city</span></p>
                                <p className="hospital-experience">Street : <span>Leoprich 880</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="profile-grid">
                <div className="profile-img"><img src="./images/profile.png" alt="" /></div>
                <div>
                    <h1>Doctor Profile</h1>
                </div>
            </div> */}
        </>
    )
}