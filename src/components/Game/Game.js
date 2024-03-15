import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Banner from "../Banner/Banner";
import GuessInput from "../GuessInput/GuessInput";
import GuessBoard from "../GuessBoard/GuessBoard";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function Game() {
  const [answer, setAnswer] = React.useState(generateAnswer);
  const [guesses, setGuesses] = React.useState([]);

  function generateAnswer() {
    const answer = sample(WORDS);
    // To make debugging easier, we'll log the solution in the console.
    console.info({ answer });
    return answer;
  }

  function handleRestart() {
    setAnswer(generateAnswer());
    setGuesses([]);
  }

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
        disabled={hasWon(guesses, answer) || hasLost(guesses, answer)}
      />
      {hasWon(guesses, answer) && (
        <Banner
          type="happy"
          guesses={guesses}
          answer={answer}
          handleRestart={handleRestart}
        />
      )}
      {hasLost(guesses, answer) && (
        <Banner
          type="sad"
          guesses={guesses}
          answer={answer}
          handleRestart={handleRestart}
        />
      )}
    </>
  );
}

export default Game;
