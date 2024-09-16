type MemoizedFunction<T extends (...args: any[]) => any> = T & {
  cache: { [key: string]: ReturnType<T> };
};

const memo = <T extends (...args: any[]) => any>(
  callback: T
): MemoizedFunction<T> => {
  const cache: { [key: string]: ReturnType<T> } = {}; // хранилище

  const memoizedCall = (...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args); // ключи
    if (cache[key]) {
      return cache[key]; // возврат из кеша
    }
    const result = callback(...args);
    cache[key] = result; // запись в кэш
    return result; // результат
  };

  memoizedCall.cache = cache;
  return memoizedCall as MemoizedFunction<T>; // возврат функции
};

export { memo };
