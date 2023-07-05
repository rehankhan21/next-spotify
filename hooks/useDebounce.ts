import { useEffect, useState } from "react";

// this is so the search isnt being constantly updated until the user stops typing for atleast 500 seconds
// or for atleast how low the delay value is. Makes less api calls.
function useDebounce<T>(value: T, delay?: number): T {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay || 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
}

export default useDebounce;
