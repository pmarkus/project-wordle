import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(0, 5).map((i) => (
        <span className="cell" key={i}>
          {guess[i]}
        </span>
      ))}
    </p>
  );
}

function GuessBoard({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess key={i} guess={guesses.length > i ? guesses[i].label : ""} />
      ))}
    </div>
  );
}

export default GuessBoard;
