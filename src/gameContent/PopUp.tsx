import "./PopUp.css";

type PopUpProperties = {
  title: string;
  setGameState: React.Dispatch<React.SetStateAction<boolean>>;
  setEndGamePopUp: React.Dispatch<React.SetStateAction<boolean>>;
  resetGame: () => void;
};
const PopUp = ({
  title,
  setGameState,
  setEndGamePopUp,
  resetGame,
}: PopUpProperties) => {
  return (
    <div>
      <div className="popup-square">
        <div className="popup-title">
          <h1 className="title">{title}</h1>
        </div>
        <div className="play-again-button category-text ">
          <button
            onClick={() => {
              setEndGamePopUp(false);
              resetGame();
            }}
          >
            Play Again
          </button>
          <button onClick={() => setGameState(false)}>Exit</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
