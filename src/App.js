import { useEffect, useState } from "react";

import "./App.css";
import getResult from "./getResult";
function App() {
  const [maxDigit, setMaxDigit] = useState();
  const [goalValue, setGoalValue] = useState();
  const [result, setResult] = useState([]);

  useEffect(() => {}, [result]);
  const handleLogic = () => {
    const list = getResult(Number(maxDigit), Number(goalValue));

    setResult(getResult(Number(maxDigit), Number(goalValue)));
  };
  return (
    <div className="App">
      <header className="App-header">
        <input
          placeholder="Max Digit"
          onChange={(e) => {
            setMaxDigit(e.target.value);
          }}
        />
        <input
          placeholder="Goal Value"
          onChange={(e) => {
            setGoalValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleLogic();
          }}
        >
          Get Result
        </button>
        <div className="Container">
          <ul>
            {result.map((results) => {
              return <li className="Card">{results}</li>;
            })}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
