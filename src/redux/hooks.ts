import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { useEffect, useState } from "react";
import { clear } from "console";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

interface IDebounce {
  searchQuery: string;
  delay: number;
}

export const useDebounce = ({ searchQuery, delay }: IDebounce) => {
  const [debounce, setDebounce] = useState<string>(searchQuery);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(searchQuery);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, delay]);
  return debounce;
};
