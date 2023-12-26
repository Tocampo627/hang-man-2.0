import "./Instructions.css";

type InstructionsProps = {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};
const Instructions = ({ setState }: InstructionsProps) => {
  return (
    <div>
      <h1 className="title">How To Play</h1>
      <div className="how-to-play-container">
        <h4>
          Welcome to Digital Hangman! A classic word-guessing game with a twist
          - you're playing against the computer! Here is how to start your
          guessing adventure:
        </h4>
        <ol className="how-to-play-ordered-list">
          <li>
            <strong>Choose Your Category:</strong> When you start the game,
            select a category from the list. This could be anything from
            Animals, Countries, etc.
          </li>
          <li>
            <strong>Computer Picks a Word:</strong> Based on your chosen
            category, the computer will think of a word and show you blank
            spaces for each letter in the word. For example, if the word is
            "APPLE," it will show as _ _ _ _ _.
          </li>
          <li>
            <strong>Start Guessing:</strong> It's your turn to guess the word.
            Select a letter you think might be in the word. If you're right, the
            letter will appear in the correct spaces. If you're wrong, a part of
            the hangman figure will be drawn.
          </li>
          <li>
            <strong>Keep an Eye on the Hangman:</strong> Be careful with your
            guesses! Each wrong guess brings the hangman figure closer to
            completion. You have limited chances before the hangman is fully
            drawn.
          </li>
          <li>
            <strong>Win or Lose:</strong> You win if you guess the word before
            the hangman is complete. If the hangman is finished first, the
            computer wins. Either way, you can always try again with a new word!
          </li>
          <li>
            <strong>Play, Learn, Enjoy:</strong> This game is not just about
            winning or losing. It's a fun way to learn! Enjoy the challenge!
          </li>
        </ol>
      </div>
      <div id="home-icon">
        <a onClick={() => setState(false)}>
          <span className="material-symbols-outlined">home</span>
        </a>
      </div>
    </div>
  );
};

export default Instructions;
