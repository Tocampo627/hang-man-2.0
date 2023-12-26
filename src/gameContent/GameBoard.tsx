import AlphaKeys from "./AlphaKeys";
import "./GameBoard.css";

type GameBoardProperties = {
  title: JSX.Element;
};
const GameBoard = ({ title }: GameBoardProperties) => {
  return (
    <div className="boardgame-container">
      <div>{title}</div>
      <div className="dash-container">
        <div className="icons-container">
          <span className="material-symbols-outlined icons">home</span>
          <span className="material-symbols-outlined icons">restart_alt</span>
        </div>
        <img
          src="public/1.svg"
          className="hangman-image"
          alt="Hang Man Image"
        ></img>
      </div>
      <div className="keys">
        <AlphaKeys></AlphaKeys>
      </div>
    </div>
  );
};

export default GameBoard;
