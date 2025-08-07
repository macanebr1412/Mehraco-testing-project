import { useEffect, useState } from "react";

// Baraye inke search ba delay etefagh biofte.
export function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState();

  useEffect(
    function () {
      const handler = setTimeout(() => setDebounced(value, delay));
      return () => clearTimeout(handler);
    },
    [value, delay]
  );
  return debounced;
}
