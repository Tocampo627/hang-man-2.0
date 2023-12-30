import "./AlphaKeys.css";
import { useState, useEffect } from "react";

type AlphaKeysProps = {
  onKeyClick: (key: string) => void;
  reset: boolean;
};
const alphabet: Array<string> = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const AlphaKeys = ({ onKeyClick, reset }: AlphaKeysProps) => {
  const [disabledLetters, setDisabledLetters] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    if (reset) {
      setDisabledLetters({});
    }
  }, [reset]);

  const handleClick = (letter: string) => {
    onKeyClick(letter);
    setDisabledLetters((prev) => ({ ...prev, [letter]: true }));
  };

  return (
    <div>
      <div className="keyboard-letters">
        {alphabet.map((letter) => (
          <div>
            <button
              className="char-button"
              key={letter}
              onClick={() => (onKeyClick(letter), handleClick(letter))}
              disabled={disabledLetters[letter]}
            >
              {letter}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlphaKeys;
