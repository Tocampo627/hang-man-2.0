import "./GameBoard.css";
type GameBoardProperties = {
  title: JSX.Element;
};
const GameBoard = ({ title }: GameBoardProperties) => {
  return <div>{title}</div>;
};

export default GameBoard;
