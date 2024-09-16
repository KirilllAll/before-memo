import { ReactNode, useState } from "react";
import ExpensiveTree from "./ExpensiveTree";

export const SolutionThree = () => {
  return (
    <ColorPicker>
      <p>Hello, world!</p>
      <ExpensiveTree />
    </ColorPicker>
  );
};

const ColorPicker = ({ children }: { children: ReactNode }) => {
  let [color, setColor] = useState("red");
  return (
    <div style={{ color }}>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      {children}
    </div>
  );
};
