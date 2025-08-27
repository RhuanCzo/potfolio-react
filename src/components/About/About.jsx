import React from "react"
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/rhuan-foto.jpg"

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
                        <p>I'm an experienced Front-End Developer. I had the privilege of collaborating with very projects </p>
                        <p> My passion for frontend development in not only reflected in my experience but also in the enthusiasm and dedication i bring to each project </p>
                    </div>
                    <div className="div about-skills">
                        <div className="div about-skill"><p>HTML & CSS</p><hr style={{ width: "60%" }} /></div>
                        <div className="div about-skill"><p>React JS</p><hr style={{ width: "80%" }} /></div>
                        <div className="div about-skill"><p>JavaScrypt</p><hr style={{ width: "80%" }} /></div>
                        <div className="div about-skill"><p>Next JS</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
                <hr />

            </div>
        </div>
    )
}
