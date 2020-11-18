# Getting Started with useEffect, useState and useRef hooks

## React Hooks

Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes

### useState Hook

useState is a Hook that can be called inside a function component to add some local state to it. It’s similar to this.setState in a class

useState takes and intial state and returns the current state value and a function that lets you update it.

#### `const [value, setValue] = useState(0)`

### useEffect Hook

The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.

useEffect() hook accepts 2 arguments:

#### `useEffect(callback[, dependencies]);`

- callback is the callback function containing side-effect logic. useEffect() executes the callback function after React has committed the changes to the screen.

- dependencies is an optional array of dependencies. useEffect() executes callback only when the dependencies have changed between renderings.

Dependencies array lets you control when the side-effect runs. When dependencies are:

- Not provided: the side-effect runs after each rendering
- An empty array []: the side-effect runs once after the initial rendering
- Has props or state values [prop1, prop2, ..., state1, state2]: the side-effect runs only when any value in the dependencies change.

### useRef Hook

The useRef hook serves two primary uses : accessing DOM nodes/elements and storing mutable information. It is the equivalent of using document.querySelector in regular javascript.

useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

#### `const refContainer = useRef(initialValue);`

The ref object is a generic container whose .current property is mutable and can hold any value, similar to an instance property on a class and updating it does not cause a re-render.

#### Sources:

[UseState React Doc](https://reactjs.org/docs/hooks-reference.html#usestate)
[UseEffect React Doc](https://reactjs.org/docs/hooks-reference.html#useeffect)
[UseEffect Blog Post (Dmitri Pavlutin)](https://dmitripavlutin.com/react-useeffect-explanation/)

[UseRef React Doc](https://reactjs.org/docs/hooks-reference.html#useref)
[UseRef React Medium Article](https://medium.com/javascript-in-plain-english/implementing-useref-in-react-732908aa1998)
