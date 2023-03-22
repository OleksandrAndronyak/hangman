import React, { useState} from "react";
import Modal from 'react-bootstrap/Modal';
import "./Helper.css"

const Helper = () => {
  //* It uses the useState hook to manage the state of whether the modal is visible or hidden
  const [showModal, setShowModal] = useState(false);

  //* The handleClose sets showModal to false to hide the modal when the Close Help button is clicked
  const handleClose = () => setShowModal(false);
  //* The handleShow sets showModal to true to show the modal when the Help button is clicked
  const handleShow = () => setShowModal(true);

  return (
    <>
      <button className="help-btn" onClick={handleShow}>
        Help
      </button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="help-title">Hangman Game Helper</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>How to play Hangman</h3>
          <p>Hangman is a word-guessing game. The objective of the game is to guess the secret word before you run out of guesses.</p>
          <h4>Rules</h4>
          <ul>
            <li>The game chooses a secret word.</li>
            <li>The player guesses letters to try to figure out the secret word.</li>
            <li>If the player guesses a letter that is in the secret word, the letter is revealed in the word.</li>
            <li>If the player guesses a letter that is not in the secret word, a part of the hangman is drawn.</li>
            <li>If the player makes six incorrect guesses, the game is over and the player loses.</li>
            <li>If the Player correctly guesses all the letters in the secret word, the game is over and the player wins.</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <button className="help-btn" onClick={handleClose}>
            Close Help
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Helper;