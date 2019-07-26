import React from "react";
import Scoreboard from "../Scoreboard/Scoreboard"
import "./Nav.css";

const Nav = props => (
    <nav className="navbar navbar-light bg-warning">
        <a className="navbar-brand" href="/">Click Game</a>
        <Scoreboard score={props.score} highScore={props.highScore} />
        <ul className="navbar-nav">
            <li className="nav-item">
                Score: {props.score} | High Score: {props.highScore}
            </li>
        </ul>
    </nav>
);

export default Nav;