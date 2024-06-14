import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("rojo");
  console.info({ setGuess });

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(evente) => {
          evente.preventDefault();
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(evente) => {
            setGuess(evente.target.value);
          }}
        />
      </form>
    </>
  );
}

export default Game;
