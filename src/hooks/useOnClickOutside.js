import { useEffect } from 'react';

/**
 * useOnClickOutside is a custom hook to detect clicks outside of a specified element.
 * It can be useful for closing modals, dropdowns, or other UI elements when the user clicks outside of them.
 *
 * @param {React.RefObject} ref - A React ref pointing to the element to detect clicks outside of.
 * @param {function} handler - A function to call when a click outside of the element is detected.
 *
 * Usage:
 *   const ref = useRef();
 *   useOnClickOutside(ref, () => console.log('Clicked outside'));
 */
export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    // Define the listener function that will be called when a click event is detected.
    const listener = (event) => {
      // If the ref is not set or the target element is contained within the ref element,
      // do not call the handler function.
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      // Call the handler function with the event.
      handler(event);
    };

    // Add the listener to the mousedown and touchstart events.
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    // Clean up the effect by removing the event listeners when the component is unmounted
    // or when the ref or handler changes.
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
/*
//Example

import React, { useState, useRef } from 'react';
import useOnClickOutside from './useOnClickOutside';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useOnClickOutside(dropdownRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDropdown}>Toggle Dropdown</button>
      {isOpen && (
        <div
          ref={dropdownRef}
          style={{
            backgroundColor: 'lightblue',
            padding: '1rem',
            marginTop: '1rem',
            position: 'relative',
          }}
        >
          Click outside this box to close it.
        </div>
      )}
    </div>
  );
}

export default App;

*/
