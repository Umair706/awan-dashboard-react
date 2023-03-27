import { useRef, useEffect } from 'react';

/**
 * usePrevious is a custom hook that stores the previous value of a given variable.
 * It can be useful when you need to track changes between renders or compare the current
 * value to the previous value.
 *
 * @param {*} value - The value to track the previous value of.
 * @returns {*} The previous value of the provided value.
 *
 * Usage:
 *   const prevValue = usePrevious(value);
 */
export default function usePrevious(value) {
  // Initialize a ref to store the previous value.
  const ref = useRef();

  // Use an effect to update the ref's current value whenever the provided value changes.
  useEffect(() => {
    ref.current = value;
  }, [value]);

  // Return the ref's current value, which will be the previous value of the provided value.
  return ref.current;
}

/*
//Example

import React, { useState } from 'react';
import usePrevious from './usePrevious';

function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCount}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;

*/
