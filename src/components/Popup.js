import React from "react";

function Popup(props) {
  const { message, handlePlayAgain } = props;

  return (
    <div className="game-popup">
      <div className="game-popup-inner">
        <p>{message}</p>
        <button className="btn-playAgain" onClick={handlePlayAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default Popup;