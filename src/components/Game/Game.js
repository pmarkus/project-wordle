import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [latestGuess, setLatestGuess] = React.useState("");

  function handleGuess(guess) {
    setLatestGuess(guess);
  }

  return (
    <>
      <p>{latestGuess}</p>
      <footer>
        <GuessInput handleGuess={handleGuess} />
      </footer>
    </>
  );
}

export default Game;
