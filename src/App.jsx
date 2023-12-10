import "./App.css";
import { useState } from "react";

function App() {
  const [disabled, setDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState("red");
  const nextColor = buttonColor === "red" ? "blue" : "red";
  const className = disabled ? "gray" : buttonColor;

  return (
    <div>
      <button
        className={className}
        onClick={() => setButtonColor(nextColor)}
        disabled={disabled}
      >
        Change to {nextColor}
      </button>
      <br />
      <input type="checkbox" id="disable-button-checkbox" defaultChecked={false} onChange={(e) => setDisabled(e.target.checked)} />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
