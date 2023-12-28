import AlphaKeys from "./AlphaKeys";
import "./GameBoard.css";
import { worldCountries, animals, usaCapitals, usaStates } from "./Categories";
import img1 from "../../public/1.svg";
import img2 from "../../public/2.svg";
import img3 from "../../public/3.svg";
import img4 from "../../public/4.svg";

type GameBoardProperties = {
  title: JSX.Element;
  setGameState: React.Dispatch<React.SetStateAction<boolean>>;
  categorySelected: string;
};

let randomWord: string = "";

const hangmanStages = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
];
let hangmanImageIndex: number = 0;

const GameBoard = ({
  title,
  setGameState,
  categorySelected,
}: GameBoardProperties) => {
  switch (categorySelected) {
    case "worldCountries":
      randomWord =
        worldCountries.content[randomizer(worldCountries.content.length)];
      break;
    case "animals":
      randomWord = animals.content[randomizer(animals.content.length)];

      break;
    case "usaCapitals":
      randomWord = usaCapitals.content[randomizer(usaCapitals.content.length)];
      break;
    case "usaStates":
      randomWord = usaStates.content[randomizer(usaStates.content.length)];
      break;

    default:
      break;
  }

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
          <span className="material-symbols-outlined icons">restart_alt</span>
        </div>
        <img
          src={hangmanStages[hangmanImageIndex].image}
          className="hangman-image"
          alt="Hang Man Image"
        ></img>
      </div>
      <div className="word-dashes">{randomWord}</div>
      <div className="keys">
        <AlphaKeys onKeyClick={handleUserKeyClick}></AlphaKeys>
      </div>
    </div>
  );
};

const randomizer = (n: number): number => {
  return Math.floor(Math.random() * n);
};

const handleUserKeyClick = (key: string) => {
  console.log("key clicked: ", key);
  if (randomWord.includes(key)) {
    console.log("yes");
  } else {
    hangmanImageIndex++;
    console.log("na");
  }
};

export default GameBoard;
