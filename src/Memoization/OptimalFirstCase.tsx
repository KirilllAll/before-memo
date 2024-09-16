import { ChangeEvent, useMemo, useState } from "react";
import { getAllPrimes } from "./utils";
import { format } from "date-fns";
import { useTime } from "./FirstCase";

const Time = () => {
  const time = useTime();
  return <p className="clock">{format(time, "hh:mm:ss a")}</p>;
};

export const Form = () => {
  const [selectedNum, setSelectedNum] = useState(100);

  const allPrimes = useMemo(() => getAllPrimes(selectedNum), [selectedNum]);

  const handleChangeNum = (event: ChangeEvent<HTMLInputElement>) => {
    let num = Math.min(1000_000, Number(event.target.value));
    setSelectedNum(num);
  };

  return (
    <>
      <form>
        <label htmlFor="num">Your number:</label>
        <input type="number" value={selectedNum} onChange={handleChangeNum} />
      </form>
      <p>
        Тут показано {allPrimes.length} простых чисел между 1 и {selectedNum}:
        <span className="prime-list">{allPrimes.join(", ")}</span>
      </p>
    </>
  );
};

export const OptimalFirstCase = () => {
  return (
    <div style={{ padding: "10px" }}>
      <Time />
      <Form />
    </div>
  );
};
