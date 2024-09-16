//* Вспомогательная функция, которая определяет,

import { getMinutes } from "date-fns";

//* является ли данное число простым или нет.
export function isPrime(n: number) {
  const max = Math.ceil(Math.sqrt(n));

  if (n === 2) {
    return true;
  }

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }

  return true;
}

//* Вспомогательная функция, которая
//* возвращает результат массив простых чисел
export const getAllPrimes = (selectedNum: number) => {
  const result = [];
  for (let counter = 2; counter < selectedNum; counter++) {
    if (isPrime(counter)) {
      result.push(counter);
    }
  }
  return result;
};

export const getBackgroundColorFromTime = (time: Date) => {
  const minutes = getMinutes(time);

  if (minutes < 20) {
    return { bg: "hsl(50 100% 90%)", color: "hsl(236, 93%, 62%)" };
  } else if (minutes > 20 && minutes < 40) {
    return { bg: "hsl(100 60% 92%)", color: "hsl(308, 93%, 23%)" };
  } else {
    return { bg: "hsl(130 200% 100%)", color: "hsl(33, 100%, 46%)" };
  }
};
