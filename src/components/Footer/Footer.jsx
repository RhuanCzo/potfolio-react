import React from "react";
import "./Footer.css"
import footer_logo from "../../assets/footer_logo.svg"
import user_icon from "../../assets/user_icon.svg"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <h2>Rhuan</h2>
                    <p>FullStack develoer from, Brazil with 5years of experience in companies</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <p className="footer-bottom-left">A 2025 Rhuan Cardozo. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}