import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessBoard from "../GuessBoard/GuessBoard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(guess) {
    setGuesses([...guesses, { label: guess, id: crypto.randomUUID() }]);
  }

  return (
    <>
      <GuessBoard guesses={guesses} />
      <GuessInput handleGuess={handleGuess} />
    </>
  );
}

export default Game;
