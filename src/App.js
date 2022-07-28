import React, { useState } from 'react';

const App = () => {
    const defaultValue = 10;
    const [count, setCount] = useState(defaultValue);
    const increment = () => setCount(prevState => prevState + 1);
    const decrement = () => setCount(prevState => prevState - 1);
    const double = () => setCount(prevState => prevState * 2);
    const reset = () => setCount(defaultValue);
    const devide3 = () => setCount((prevState) => prevState % 3 === 0 ? prevState / 3 : prevState);
    return (
        <>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={double}>x2</button>
            <button onClick={reset}>reset</button>
            <button onClick={devide3}>３の倍数のときだけ３で割る</button>
            <br />
            count: {count}
        </>
    );
}

export default App;
