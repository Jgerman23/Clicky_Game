import React, { Component } from "react";

class Scoreboard extends Component {
    state = {
        message: "",
        numberScore: false
    };

    componentWillReceiveProps({ score, highScore }) {
        let newState = { numberScore: true };
        if (score === 0 && highScore === 0) {
            newState.message = "";
        } else if (score === 0 && highScore > 0) {
            newState.message = "incorrect";
        } else {
            newState.message = "correct";
        }
        this.setState(newState, () =>
            setTimeout(() => this.setState({ numberScore: false }), 600)
        );
    }

    renderMessage = () => {
        switch (this.state.message) {
            case "correct":
                return "You Guessed Correctly!";
            case "incorrect":
                return "You Guessed Incorrectly!";
            default:
                return "Click an image to get started!";
        }
    };

    render() {
        return (
            <li className={this.state.numberScore ? this.state.message : ""}>
                {this.renderMessage()}
            </li>
        );
    }

}

export default Scoreboard;