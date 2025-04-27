import { useState } from "react";
import "./styles.css";

export default function App() {
  const [btn, setBtn] = useState(1);
  const [cbtn, setCbtn] = useState(0);

function handleReset() {
  setBtn(1);
  setCbtn(0);
}

  const date = new Date();
  date.setDate(date.getDate() + cbtn);

  const handleInput = (e) => {
    setBtn(Number(e.target.value));
  };

  return (
    <div className="App">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={btn}
          onChange={handleInput}
        />
        <span>{btn}</span>
        {/* <button onClick={() => setBtn((num) => num - 1)}>-</button>
        <span>Step: {btn}</span>
        <button onClick={() => setBtn((num) => num + 1)}>+</button> */}
      </div>
      <div>
        <button onClick={() => setCbtn((num) => num - btn)}>-</button>
        <input type="text" value={cbtn} onChange={(e)=> setCbtn(Number(e.target.value))}/>
        <button onClick={() => setCbtn((num) => num + btn)}>+</button>
      </div>
      <p>
        <span>
          {cbtn === 0
            ? "Today is "
            : cbtn > 0
            ? `${cbtn} days from today is `
            : `${Math.abs(cbtn)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    {cbtn !== 0 || btn !== 1 ? (<div>
      <button onClick={handleReset}>RESET</button>
        </div>) : null}
    </div>
  );
}

 



