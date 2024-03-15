import React from "react";

function GuessBoard({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ id, label }) => (
        <p key={id}>{label}</p>
      ))}
    </div>
  );
}

export default GuessBoard;
