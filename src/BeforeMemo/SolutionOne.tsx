import { memo, useState } from "react";
import ExpensiveTree from "./ExpensiveTree";

let ExpensiveTreeMemo = memo(ExpensiveTree); // Классическая оптимизация с React.memo

export const SolutionOne = () => {
  let [color, setColor] = useState("red");
  return (
    <div className="App">
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
      <ExpensiveTreeMemo />
    </div>
  );
};
