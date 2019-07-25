import React from "react";
import Scoreboard from "../Scoreboard/Scoreboard"

const Nav = props => (
    <nav className="navbar navbar-light bg-primary">
        <a className="navbar-brand" href="/">Click Game</a>
        <ul className="navbar-nav">
            <Scoreboard score={props.score} highScore={props.highScore} />
            <li className="nav-item">
                Score: {props.score} | High Score: {props.highScore}
            </li>
        </ul>
    </nav>
);

export default Nav;