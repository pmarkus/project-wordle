import React from "react";

function GuessInput({ handleGuess }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      class="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guessInput">Enter guess:</label>
      <input
        id="guessInput"
        value={guess}
        required
        pattern="[a-zA-Z]{5,5}"
        maxLength="5"
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      ></input>
    </form>
  );
}

export default GuessInput;