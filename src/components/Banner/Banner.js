import React from "react";

function Banner({ type, guesses, answer, handleRestart }) {
  let message = "";
  switch (type) {
    case "happy":
      message = (
        <>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{`${guesses.length} guesses`}</strong>
        </>
      );
      break;
    case "sad":
    default:
      message = (
        <>
          Sorry, the correct answer is <strong>{answer}</strong>
        </>
      );
  }

  return (
    <div className={`${type} banner`}>
      {message}
      <button
        className="bannerButton"
        onClick={() => {
          console.log("Restarting");
          handleRestart();
        }}
      >
        Restart
      </button>
    </div>
  );
}

export default Banner;
