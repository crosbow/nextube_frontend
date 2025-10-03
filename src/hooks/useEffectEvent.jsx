import { useRef } from "react";

const useEffectEvent = (callback) => {
  const ref = useRef(callback);

  ref.current = callback;

  return (...args) => {
    return ref.current(...args);
  };
};
export default useEffectEvent;
