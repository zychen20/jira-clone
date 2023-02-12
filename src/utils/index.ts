import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// const debounce = (func, delay) => {
//   let timeout;
//   return (...param) => {
//     if (timeout) {
//       clearTimeout(timeout);
//     }
//     timeout = setTimeout(function() {
//       func(...param);
//     }, delay)
//   }
// }

export const useDebounce = <T>(value: T, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

export const useArray = <T>(value: T[]) => {
  // hello，请把作业写在这里吧，写完记得再对照作业要求检查一下
  const [array, setArray] = useState(value);

  const clear = (): void => {
    setArray([]);
  };

  const removeIndex = (index: number): void => {
    const newArr = [...array];
    newArr.splice(index, 1);
    setArray(newArr);
  };

  const add = (person: T): void => {
    setArray([...array, person]);
  };

  return { value: array, clear, add, removeIndex };
};
