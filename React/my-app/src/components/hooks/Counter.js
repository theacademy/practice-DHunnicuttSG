import React from "react";
import useCounter from "./useCounter";

function CounterComponent() {
    const { count, increment, decrement } = useCounter(0)

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Add 1</button>
            <button onClick={decrement}>Minus 1</button>
        </div>
    )

}
export default CounterComponent