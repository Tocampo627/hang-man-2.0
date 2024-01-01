import AlphaKeys from "./AlphaKeys";
import "./GameBoard.css";
import { worldCountries, animals, usaCapitals, usaStates } from "./Categories";
import { useEffect, useState } from "react";
import img1 from "../../public/1.svg";
import img2 from "../../public/2.svg";
import img3 from "../../public/3.svg";
import img4 from "../../public/4.svg";
import img5 from "../../public/5.svg";
import img6 from "../../public/6.svg";
import img7 from "../../public/7.svg";
import img8 from "../../public/8.svg";
import PopUp from "./PopUp";

type GameBoardProperties = {
  title: JSX.Element;
  setGameState: React.Dispatch<React.SetStateAction<boolean>>;
  categorySelected: string;
};

const MAX_INCORRECT_TRIES: number = 7;
const hangmanStages = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  { image: img8 },
];

const GameBoard = ({
  title,
  setGameState,
  categorySelected,
}: GameBoardProperties) => {
  const [randomWord, setRandomWord] = useState<string>("");
  const [resetKeyboard, setResetKeyBoard] = useState<boolean>(false);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [wrongGuessCount, setWrongGuessCount] = useState<number>(0);
  const [dashedWordProgress, setDashedWordProgress] = useState<string>("");
  const [endGamePopUp, setEndGamePopUp] = useState<boolean>(false);
  const [matchStatus, setMatchStatus] = useState<string>("");

  const generateRandomWord = () => {
    let randomWord: string = "";

    switch (categorySelected) {
      case "worldCountries":
        randomWord =
          worldCountries.content[randomizer(worldCountries.content.length)];
        break;
      case "animals":
        randomWord = animals.content[randomizer(animals.content.length)];
        break;
      case "usaCapitals":
        randomWord =
          usaCapitals.content[randomizer(usaCapitals.content.length)];
        break;
      case "usaStates":
        randomWord = usaStates.content[randomizer(usaStates.content.length)];
        break;

      default:
        break;
    }
    setRandomWord(randomWord);
  };

  useEffect(() => {
    const dashedWord = randomWord
      .split("")
      .map((letter) =>
        letter === " "
          ? "\u00A0\u00A0"
          : guessedLetters.has(letter.toLowerCase())
          ? letter
          : "_"
      )
      .join(" ");
    setDashedWordProgress(dashedWord);
  }, [randomWord, guessedLetters, dashedWordProgress]);

  useEffect(() => {
    generateRandomWord();
  }, [categorySelected]);

  useEffect(() => {
    setTimeout(() => {
      if (dashedWordProgress && !dashedWordProgress.includes("_")) {
        setMatchStatus("YOU WON! 🥳");
        setEndGamePopUp(true);
      }
    }, 150);
  }, [dashedWordProgress]);

  useEffect(() => {
    setTimeout(() => {
      if (wrongGuessCount >= MAX_INCORRECT_TRIES) {
        setMatchStatus("YOU LOST! 🤭");
        setEndGamePopUp(true);
      }
    }, 150);
  }, [wrongGuessCount]);

  const handleUserKeyClick = (key: string) => {
    const lowerCaseKey = key.toLowerCase();
    if (randomWord.toLowerCase().includes(lowerCaseKey)) {
      setGuessedLetters(new Set([...guessedLetters, lowerCaseKey]));
    } else {
      setWrongGuessCount(wrongGuessCount + 1);
    }
  };

  const resetGame = () => {
    generateRandomWord();
    setResetKeyBoard(true);
    setGuessedLetters(new Set());
    setWrongGuessCount(0);
    setTimeout(() => {
      setResetKeyBoard(false);
    }, 150);
  };
  if (!endGamePopUp) {
    return (
      <div className="boardgame-container">
        <div>{title}</div>
        <div className="dash-container">
          <div className="icons-container">
            <span
              className="material-symbols-outlined icons"
              onClick={() => setGameState(false)}
            >
              home
            </span>
            <span
              className="material-symbols-outlined icons"
              onClick={() => resetGame()}
            >
              restart_alt
            </span>
          </div>
          <img
            src={hangmanStages[wrongGuessCount].image}
            className="hangman-image"
            alt="Hang Man Image"
          ></img>
        </div>

        <div>
          Incorrect Moves: {wrongGuessCount} / {MAX_INCORRECT_TRIES}
        </div>
        <div className="word-dashes">{dashedWordProgress}</div>

        <div className="keys">
          <AlphaKeys
            onKeyClick={handleUserKeyClick}
            reset={resetKeyboard}
          ></AlphaKeys>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <PopUp
          title={matchStatus}
          setGameState={setGameState}
          setEndGamePopUp={setEndGamePopUp}
          resetGame={resetGame}
          answer={randomWord}
        ></PopUp>
      </div>
    );
  }
};

const randomizer = (n: number): number => {
  return Math.floor(Math.random() * n);
};

export default GameBoard;
