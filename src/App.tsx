import "./App.css";
import { useState } from "react";
import Instructions from "./gameContent/Instructions";
import GameBoard from "./gameContent/GameBoard";

function App() {
  const [needHelp, setState] = useState<boolean>(false);
  const title: JSX.Element = <h1 className="title">A Classic Game of Hangman</h1>;
  if (needHelp) {
    return <Instructions setState={setState}></Instructions>;
  } else {
    return (
      <>
        <div>
          <div>
           {title}
          </div>
          <div>
            <h3 className="category-text">Select a Category</h3>
            <div className="category-buttons category-text">
              <button>World Countries 🌎</button>
              <button>Animals 🐕</button>
              <button>USA Capitals 🇺🇸</button>
            </div>
            <div id="question-icon">
              <a onClick={() => setState(true)}>
                <span className="material-symbols-outlined">help</span>
              </a>
            </div>
          </div>
          <div>
            <GameBoard title={title}></GameBoard>
          </div>
        </div>
      </>
    );
  }
}

export default App;
