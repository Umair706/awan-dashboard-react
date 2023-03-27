import { useState, useEffect } from 'react';

/**
 * useFetch is a custom hook that simplifies fetching data from an API using the Fetch API.
 * It returns the fetched data, loading status, and any error that occurred during the fetch.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {object} [options] - Optional configuration options for the fetch request.
 * @returns {object} An object containing the fetched data, loading status, and error (if any).
 *
 * Usage:
 *   const { data, loading, error } = useFetch('https://api.example.com/data');
 */
export default function useFetch(url, options) {
  // Initialize the state values for data, loading status, and error.
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define an async function to fetch data.
    const fetchData = async () => {
      // Set the loading status to true and reset any previous error.
      setLoading(true);
      setError(null);

      try {
        // Fetch the data from the provided URL using the optional options.
        const response = await fetch(url, options);
        // If the response is not ok, throw an error with the status code.
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        // Parse the response data as JSON and update the data state.
        const data = await response.json();
        setData(data);
      } catch (error) {
        // If an error occurred, set the error state with the error message.
        setError(error.message);
      } finally {
        // Set the loading status to false after the fetch is completed.
        setLoading(false);
      }
    };

    // Call the fetchData function.
    fetchData();
  }, [url, options]); // Re-run the effect when the url or options change.

  // Return an object containing the data, loading status, and error.
  return { data, loading, error };
}

/*
//Example

import React from 'react';
import useFetch from './useFetch';

function App() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Todo</h1>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}

export default App;

*/
