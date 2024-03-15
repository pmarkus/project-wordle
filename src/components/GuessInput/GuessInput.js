import React from "react";

function GuessInput({ handleGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guessInput">Enter guess:</label>
      <input
        id="guessInput"
        disabled={disabled}
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
