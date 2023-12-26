import "./App.css";
import { useState } from "react";
import Instructions from "./gameContent/Instructions";

function App() {
  const [needHelp, setState] = useState<boolean>(false);

  if (needHelp) {
    return <Instructions setState={setState}></Instructions>;
  } else {
    return (
      <>
        <div>
          <div>
            <h1 className="title">A Classic Game of Hangman</h1>
          </div>
          <div>
            <h3>Select a Category</h3>
            <div className="category-buttons">
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
        </div>
      </>
    );
  }
}

export default App;
