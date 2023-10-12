import { useState, Dispatch, SetStateAction } from "react";

type LocalStorageValue<T> = [T | null, Dispatch<SetStateAction<T | null>>];

const useLocalStorage = <T,>(key: string): LocalStorageValue<T> => {
  const [data, setData] = useState<T | null>(() => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  });

  const saveData = (newData: T) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  return [data, saveData];
};

export default useLocalStorage;
