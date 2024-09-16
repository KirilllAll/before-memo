import { useState } from "react";
import ExpensiveTree from "./ExpensiveTree";

export const SolutionTwo = () => {
  return (
    <>
      <Form />
      <ExpensiveTree />
    </>
  );
};

const Form = () => {
  let [color, setColor] = useState("red");
  return (
    <>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
    </>
  );
};

// Что если нам понадобится указать цвет родительскому элементу выше?

const Example = () => {
  let [color, setColor] = useState("red");
  return (
    <div style={{ color }}>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p>Hello, world!</p>
      <ExpensiveTree />
    </div>
  );
};

export { Example };
