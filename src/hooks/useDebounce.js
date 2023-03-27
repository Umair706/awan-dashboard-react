import { useState, useEffect } from 'react';

/**
 * useDebounce is a custom hook that debounces a value.
 * It can be useful when implementing features like search-as-you-type or making API calls based on user input.
 *
 * @param {*} value - The value to debounce.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {*} The debounced value.
 *
 * Usage:
 *   const debouncedValue = useDebounce(value, 300);
 */
export default function useDebounce(value, delay) {
  // Initialize the debounced value state with the provided value.
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Create a setTimeout handler to update the debounced value after the specified delay.
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clear the timeout when the effect is cleaned up to avoid updating the debounced
    // value if the component is unmounted or if the value or delay changes.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  // Return the debounced value.
  return debouncedValue;
}

/*
//Example

import React, { useState, useEffect } from 'react';
import useDebounce from './useDebounce';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('Perform search with debounced term:', debouncedSearchTerm);
      // Perform your search or API call here.
    }
  }, [debouncedSearchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for something..."
      />
    </div>
  );
}

export default App;
*/
