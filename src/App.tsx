import "./App.css";
import { useState } from "react";
import Instructions from "./gameContent/Instructions";
import GameBoard from "./gameContent/GameBoard";

function App() {
  const [needHelp, setState] = useState<boolean>(false);
  const [playGame, setGameState] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const title: JSX.Element = (
    <h1 className="title">A Classic Game of Hangman</h1>
  );

  if (needHelp) {
    return <Instructions setState={setState}></Instructions>;
  } else if (playGame) {
    return (
      <GameBoard
        title={title}
        setGameState={setGameState}
        categorySelected={selectedCategory}
      ></GameBoard>
    );
  } else {
    return (
      <>
        <div>
          <div>{title}</div>
          <div>
            <h3 className="category-text">Select a Category</h3>
            <div className="category-buttons category-text">
              <button
                onClick={() => (
                  setGameState(true), setSelectedCategory("worldCountries")
                )}
              >
                World Countries 🌎
              </button>
              <button
                onClick={() => (
                  setGameState(true), setSelectedCategory("animals")
                )}
              >
                Animals 🐕
              </button>
              <button
                onClick={() => (
                  setGameState(true), setSelectedCategory("usaCapitals")
                )}
              >
                US Capitals 🇺🇸
              </button>
              <button
                onClick={() => (
                  setGameState(true), setSelectedCategory("usaStates")
                )}
              >
                US States 🇺🇸
              </button>
            </div>
            <div id="question-icon">
              <a onClick={() => setState(true)}>
                <span className="material-symbols-outlined">help</span>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
