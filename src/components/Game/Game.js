import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessBoard from "../GuessBoard/GuessBoard";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function hasWon(guesses, answer) {
    if (guesses.length === 0) {
      return false;
    }
    check = checkGuess(guesses[guesses.length - 1].label, answer);
    const incompleteLetters = check.filter(
      ({ status }) => status !== "correct"
    );
    return incompleteLetters.length === 0;
  }

  function hasLost(guesses, answer) {
    return guesses.length >= NUM_OF_GUESSES_ALLOWED && !hasWon(guesses, answer);
  }

  function handleGuess(guess) {
    const nextGuesses = [...guesses, { label: guess, id: crypto.randomUUID() }];
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessBoard guesses={guesses} answer={answer} />
      <GuessInput
        handleGuess={handleGuess}
        disabled={hasWon(guesses, answer) || hasLost(guesses)}
      />
      {hasWon(guesses, answer) && (
        <div className="happy banner">
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{`${guesses.length} guesses`}</strong>
        </div>
      )}
      {hasLost(guesses, answer) && (
        <div className="sad banner">
          Sorry, the correct answer is <strong>{answer}</strong>
        </div>
      )}
    </>
  );
}

export default Game;
