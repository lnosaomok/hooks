# Getting Started with useEffect, useState and useRef hooks

## React Hooks

Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes

### useState Hook

useState is a Hook that can be called inside a function component to add some local state to it. It’s similar to this.setState in a class

useState takes and intial state and returns the current state value and a function that lets you update it.

#### `const [value, setValue] = useState(0)`

### useEffect Hook

The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.

By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.

A re-render will occur any time the value passed in as the memo to useEffect changes.

### useRef Hook

The useRef hook serves two primary uses : accessing DOM nodes/elements and storing mutable information. It is the equivalent of using document.querySelector in regular javascript.

The ref object is a generic container whose .current property is mutable and can hold any value, similar to an instance property on a class and updating it does not cause a re-render.
