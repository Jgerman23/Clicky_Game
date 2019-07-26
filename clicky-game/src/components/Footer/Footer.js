import React from "react";
import "./Footer.css"

const Footer = props => (
    <nav className="navbar-bottom navbar-light">
        <a className="nav-link disabled" href="..." tabIndex="-1" aria-disabled="true">
            <img src={"/assets/images/react.png"} alt="..." />
            Clicky Game
        </a>
    </nav>
);

export default Footer;