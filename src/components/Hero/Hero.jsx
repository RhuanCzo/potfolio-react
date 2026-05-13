import React from "react";
import "./Hero.css"
import profile_img from "../../assets/rhuan-foto.jpeg"
import AnchorLink from "react-anchor-link-smooth-scroll";


export const Hero = () => {
    return (
        <div id="home" className="hero">
            <img src={profile_img} alt=""/>
            <h1><span>I'm Rhuan Cardozo</span>, frontend developer from Brazil</h1>
            <p>I am a frontend developer from São Paulo, Brazil with 5 years of experience in multiples projects</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}