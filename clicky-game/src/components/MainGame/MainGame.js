import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Container from "../Container/Container";
import ClickCard from "../ClickCard/ClickCard";
import data from "../../data.json"

class MainGame extends Component {
    state = {
        data,
        score: 0,
        highScore: 0
    };

    componentDidMount() {
        this.setState({ data: this.shuffleData(this.state.data) });
    }

    handleCorrect = newData => {
        const { highScore, score } = this.state;
        const newScore = score + 1;
        const newHighScore = newScore > highScore ? newScore : highScore;
        this.setState({
            data: this.shuffleData(newData),
            score: newScore,
            highScore: newHighScore
        });
    };

    handleIncorrect = data => {
        this.setState({
            data: this.resetData(data),
            score: 0
        });
    };


    resetData = data => {
        const resetData = data.map(item => ({ ...item, clicked: false }));
        return this.shuffleData(resetData);
    };

    shuffleData = data => {
        let i = data.length - 1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        }
        return data;
    };

    handleClickedCard = id => {
        let guessedCorrectly = false;
        const newData = this.state.data.map(item => {
            const newItem = { ...item };
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    guessedCorrectly = true;
                }
            }
            return newItem;
        });
        guessedCorrectly
            ? this.handleCorrect(newData) : this.handleIncorrect(newData);
    }

    render() {
        return (
            <div>
                <Nav score={this.state.score} highScore={this.state.highScore} />
                <Header />
                <Container>
                    {this.state.data.map(item => (
                        <ClickCard
                            key={item.id}
                            id={item.id}
                            shake={!this.state.score && this.state.highScore}
                            handleClick={this.handleClickedCard}
                            image={item.image}
                        />
                    ))}
                </Container>
            </div>
        )
    }

}

export default MainGame;