## Notes


## Rules of Hooks:
- Hooks can only be called inside React function components.
    - You should not call hooks from regular javaScript functions. this ensures that all stateful logic in a component is clearly visible from its source code

- Hooks can only be called at the top level of a component.
    - Do not call hooks from inside loops, conditions, or nested functions. This will ensure that hooks are called in the same order each time for a component renders and preserve the state of hooks between multiple useState and useEffect calls

- Hooks cannot be conditional
  - Hooks should not be called conditionally. Avoid calling hooks inside if statements or any other conditional logic. This rule helps maintain the order of hook calls, which helps React to manage the state correctly
