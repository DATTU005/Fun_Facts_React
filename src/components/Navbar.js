import React from "react";
import logo from "../Img/react-logo.png"
export default function Navbar() {
    return(
        <div>
            <nav>
                <img src={logo} alt="react-logo" className="nav--icon"/>
                <h3 className="nav--logo_text">React Facts</h3>
                <h4 className="nav--title">History of the React and achievements</h4>
            </nav>
        </div>

    )
}