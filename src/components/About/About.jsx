import React from "react"
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/about_profile.svg"

export const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="div about-sections">
                <div className="div about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="div about-right">
                    <div className="div about-para">
                        <p>I am an experienced develope aklsdjhlaksdjaljkdhalkjdhalkjdhsalk</p>
                        <p>My passion for front end asdasdasdkajhdakljdhaskjdha</p>
                    </div>
                    <div className="div about-skills">
                        <div className="div about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="div about-skill"><p>REACT JS</p><hr style={{ width: "50%" }} /></div>
                        <div className="div about-skill"><p>JAVASCRYPT</p><hr style={{ width: "50%" }} /></div>
                        <div className="div about-skill"><p>MONGODB</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS CONCLUDS</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
                <hr />

            </div>
        </div>
    )
}
