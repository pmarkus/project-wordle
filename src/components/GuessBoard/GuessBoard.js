import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const check = !!guess
    ? checkGuess(guess, answer)
    : [
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
        { letter: "", status: "" },
      ];

  return (
    <p className="guess">
      {range(0, 5).map((i) => (
        <span className={`cell ${check[i].status}`} key={i}>
          {check[i].letter}
        </span>
      ))}
    </p>
  );
}

function GuessBoard({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess
          key={i}
          guess={guesses.length > i ? guesses[i].label : ""}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default GuessBoard;
