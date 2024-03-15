import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function GuessBoard({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((y) => (
        <p className="guess" key={y}>
          {range(0, 5).map((x) => (
            <span className="cell" key={x}>
              {guesses.length > y && guesses[y].label[x]}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessBoard;
