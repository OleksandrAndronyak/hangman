import React, { Component } from "react";
import "./Hangman.css";
import Helper from "./Helper";
import { randomWord } from "./Words.js";
import Popup from "./Popup";
//! Images from Hangman
import step0 from "./images/0.jpg";
import step1 from "./images/1.jpg";
import step2 from "./images/2.jpg";
import step3 from "./images/3.jpg";
import step4 from "./images/4.jpg";
import step5 from "./images/5.jpg";
import step6 from "./images/6.jpg";

class Hangman extends Component {
static defaultProps = {
  maxWrong: 6, //* The max number of wrong guesses allowed
  images: [step0, step1, step2, step3, step4, step5, step6]
}

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      //* A Set object to keep track of the letters guessed by the user
      guessed: new Set([]),
      //* The randomly generated word to be guessed by the user
      answer: randomWord()

    }
  }

  //! A function to return the guessed word with underscores for letters that haven't been guessed yet
  guessedWord() {
    return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
  }


  //!Generate Buttons for each letter if alphabet abd key and each value
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
      
      <button 
        className="btn-alphabet" 
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
        >
          {letter}
      </button>
    ))
  }

  //! Reset-btn Function
  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    })
  }
 
  //! If the user guesses the letter it will show otherwise it will increment to MaxWrong
  handleGuess = e => {
    let letter = e.target.value; // Get the value of the button clicked
    this.setState(st => ({
      //* Add the guessed letter to the Set object
      guessed: st.guessed.add(letter), 
      //* Increment the mistake count if the letter isn't in the word
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
    }));
  }

  render() {
    //* Check if the maximum number of wrong guesses has been reached
    const gameOver = this.state.mistake >= this.props.maxWrong;
    //* Check if the player has won by comparing the joined guessed word to the answer
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    //! two statements for either win or loss
    if (isWinner) {
      gameStat = (
        <Popup
          message={"Congratulations! You won! 😃"}
          handlePlayAgain={this.resetButton}
        />
      );
    }

    if (gameOver) {
      gameStat = (
        <Popup
          message={'Unfortunately you lost. 😕'}
          handlePlayAgain={this.resetButton}
        />
      );
    }

    return (
      <div className="Hangman-container">
        <h1>Hangman</h1>
        <p> Guess the programming language:</p>
        <div className="wrong-guesses">Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}</div>
        <div className="hangman-img">
          <img src={this.props.images[this.state.mistake]} alt="hangman-pic" />
        </div>
        <div>
          <p className="words">
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p>
          <p>{gameStat}</p>
          <button className="reset" onClick={this.resetButton}>Reset</button>
          <Helper />
        </div>
      </div>
    )
  }
}

export default Hangman;