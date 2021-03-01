// SOURCE an answer by ford04 at https://stackoverflow.com/questions/54954091/how-to-use-callback-with-usestate-hook-in-react
import { useEffect, useRef, useState } from "react";

const useStateCallback = (initialState) => {
  const [state, setState] = useState(initialState);
  const callbackRef = useRef(null);

  const setStateCallback = (state, callback) => {
    callbackRef.current = callback;
    setState(state);
  };

  useEffect(() => {
    if (callbackRef.current) {
      callbackRef.current(state);
      callbackRef.current = null;
    }
  }, [state]);

  return [state, setStateCallback];
};

export default useStateCallback;