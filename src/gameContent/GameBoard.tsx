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

type GameBoardProperties = {
  title: JSX.Element;
  setGameState: React.Dispatch<React.SetStateAction<boolean>>;
  categorySelected: string;
};

const MAX_TRIES = 8;

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
  const [hangmanImageIndex, setHangmanImageIndex] = useState<number>(0);
  const [randomWord, setRandomWord] = useState<string>("");
  const [resetKeyboard, setResetKeyBoard] = useState<boolean>(false);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());

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
    console.log(randomWord);
  };

  useEffect(() => {
    generateRandomWord();
  }, [categorySelected]);

  const handleUserKeyClick = (key: string) => {
    const lowerCaseKey = key.toLowerCase();

    if (randomWord.toLowerCase().includes(lowerCaseKey)) {
      setGuessedLetters(new Set([...guessedLetters, lowerCaseKey]));
    } else {
      if (hangmanImageIndex + 1 <= MAX_TRIES) {
        setHangmanImageIndex(hangmanImageIndex + 1);
      } else {
        console.warn("youre out of tries");
        resetGame();
      }
    }
  };

  const getWordDisplay = () => {
    return randomWord
      .split("")
      .map((letter) =>
        letter === " "
          ? "\u00A0\u00A0"
          : guessedLetters.has(letter.toLowerCase())
          ? letter
          : "_"
      )
      .join(" ");
  };

  const resetGame = () => {
    setHangmanImageIndex(0);
    generateRandomWord();
    setResetKeyBoard(true);
    setGuessedLetters(new Set());
    setTimeout(() => {
      setResetKeyBoard(false);
    }, 100);
  };

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
          src={hangmanStages[hangmanImageIndex].image}
          className="hangman-image"
          alt="Hang Man Image"
        ></img>
      </div>

      <div className="word-dashes">{getWordDisplay()}</div>

      <div className="keys">
        <AlphaKeys
          onKeyClick={handleUserKeyClick}
          reset={resetKeyboard}
        ></AlphaKeys>
      </div>
    </div>
  );
};

const randomizer = (n: number): number => {
  return Math.floor(Math.random() * n);
};

export default GameBoard;
