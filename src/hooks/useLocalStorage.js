import { useState, useEffect } from 'react';

/**
 * useLocalStorage is a custom hook that manages state with local storage persistence.
 * It makes it easy to store and retrieve state values in the browser's local storage.
 *
 * @param {string} key - The key to use when storing and retrieving the value from local storage.
 * @param {*} initialValue - The initial value of the state if no value is already stored in local storage.
 * @returns {Array} An array containing the current state value and a function to update the state.
 *
 * Usage:
 *   const [value, setValue] = useLocalStorage('someKey', 'defaultValue');
 */
export default function useLocalStorage(key, initialValue) {
  // Initialize the state using a function to avoid parsing the stored value
  // multiple times when the hook is used in multiple components.
  const [value, setValue] = useState(() => {
    // Get the stored value from local storage.
    const storedValue = localStorage.getItem(key);
    // If there's a stored value, parse it as JSON and use it as the initial value.
    // Otherwise, use the provided initial value.
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  // When the key or value changes, update the stored value in local storage.
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // Return the current state value and a function to update the state.
  return [value, setValue];
}

/*
// Example:

import React from 'react';
import useLocalStorage from './useLocalStorage';

function App() {
  const [name, setName] = useLocalStorage('name', '');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input value={name} onChange={handleChange} placeholder="Enter your name" />
      <p>Hello, {name || 'stranger'}!</p>
    </div>
  );
}

export default App;

*/
