import { memo, useCallback, useState } from "react";

export const FixSecondExample = () => {
  const [count, setCount] = useState(0);

  const handleMegaBoost = useCallback(() => {
    setCount((currentValue) => currentValue + 1234);
  }, []);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "220px",
      }}
    >
      <p style={{ padding: 0, margin: 0, border: "1px solid white" }}>
        Count: {count}
      </p>
      <button onClick={handleClick}>Click me!</button>
      <button
        style={{
          background: "hsl(20 10% 10%)",
        }}
        onClick={handleReset}
      >
        Reset!
      </button>
      <MegaBoost handleClick={handleMegaBoost} />
    </div>
  );
};

const MegaBoost = memo(({ handleClick }: { handleClick: () => void }) => {
  console.log("Render MegaBoost");

  return (
    <button className="mega-boost-button" onClick={handleClick}>
      MEGA BOOST!
    </button>
  );
});
