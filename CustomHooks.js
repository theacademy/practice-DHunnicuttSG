/*
1. Start with “use”: By convention, custom hooks should start with the word 
    “use” to indicate that they follow the rules of hooks. For example, 
    useCustomHook.
2. Define the Hook: Write a function that encapsulates the logic you want to 
    reuse. This function can use other hooks like useState, useEffect, etc.
3. Return Values: Ensure your custom hook returns the values or functions 
    needed by the components that will use it. This could include state 
    variables, functions, or any other data.
*/

/* Create the useToggle hook:

import { useState } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
}

export default useToggle;
*/

/* Use the useToggle hook in your code:
import React from 'react';
import useToggle from './useToggle';

function ToggleComponent() {
  const [isToggled, toggle] = useToggle(false);

  return (
    <div>
      <p>Is Toggled: {isToggled ? 'Yes' : 'No'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
*/