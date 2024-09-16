import { useEffect, useMemo, useState } from "react";
import { getAllPrimes } from "./utils";
import { format } from "date-fns";

//* Предположим, мы создаем инструмент, который поможет пользователям найти все простые числа от 0 до selectedNum,
//* где selectedNum — это значение, введенное пользователем.
//*Простое число — это число, которое можно разделить только на 1 и себя, например 17.

export const FirstCase = () => {
  //* `time` — это переменная состояния, которая меняется
  //* раз в секунду, поэтому она всегда синхронизируется с текущим временем.
  const time = useTime();

  //* Мы сохраняем выбранный пользователем номер в состоянии.
  const [selectedNum, setSelectedNum] = useState(100);

  //* Мы вычисляем все простые числа от 0 до выбранного пользователем
  //* числа «selectedNum»:
  const allPrimes = useMemo(() => getAllPrimes(selectedNum), [selectedNum]);

  return (
    <div style={{ padding: "10px" }}>
      <p className="clock">{format(time, "hh:mm:ss a")}</p>
      <form>
        <label htmlFor="num">Your number:</label>
        <input
          type="number"
          value={selectedNum}
          onChange={(event) => {
            let num = Math.min(1000_000, Number(event.target.value));

            setSelectedNum(num);
          }}
        />
      </form>
      <p>
        Тут показано {allPrimes.length} простых чисел между 1 и {selectedNum}:
        <span className="prime-list">{allPrimes.join(", ")}</span>
      </p>
    </div>
  );
};

export const useTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return time;
};

// Я специально выбрал этот пример что бы показать как просто и легко сочитаются оба подхода
// before memo и memo
// попробуем оптимизировать наш код еще лучше
