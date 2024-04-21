import { useEffect, useRef } from "react";

function useInterval(callback: (...arg: any[]) => void, delay: number) {
  const savedCallback = useRef<((...arg: any[]) => void) | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }

    if (delay !== null) {
      const intervalId = setInterval(tick, delay);

      return () => clearInterval(intervalId);
    }
  }, [delay]);
}

export default useInterval;
