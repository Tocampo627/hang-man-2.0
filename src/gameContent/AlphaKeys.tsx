import "./AlphaKeys.css";

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

const AlphaKeys = () => {
  return (
    <div>
      <div className="keyboard-letters">
        {alphabet.map((letter) => (
          <div>
            <button className="char-button" key={letter}>
              {letter}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlphaKeys;
