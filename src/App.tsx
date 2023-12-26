import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
            <span className="material-symbols-outlined">help</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
