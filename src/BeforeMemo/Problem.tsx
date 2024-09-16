import { useState } from "react";
import ExpensiveTree from "./ExpensiveTree";

export default function Problem() {
  let [color, setColor] = useState("red");
  return (
    <div className="App">
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
      <ExpensiveTree />
    </div>
  );
}
