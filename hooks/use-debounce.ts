import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
}
