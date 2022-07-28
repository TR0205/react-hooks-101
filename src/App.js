import React, { useState, useEffect } from 'react';

const App = props => {
    const [state, setState] = useState(props);
    const { name, price } = state;

    useEffect(() => {
        console.log('name変更');
    }, [name]);

    useEffect(() => {
        console.log('componentマウント完了後1度しか呼ばれない');
    }, []);

    useEffect(() => {
        console.log('componentマウント完了後何度も呼ばれる');
    });

    return (
        <>
            <p>現在の{name}は、{price}円です</p>
            <button onClick={() => setState({...state, price: price + 1})}>+1</button>
            <button onClick={() => setState({...state, price: price - 1})}>-1</button>
            <button onClick={() => setState(props)}>Reset</button>
            <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
        </>
    );
}

App.defaultProps = {
    name: '',
    price: 1000
}

export default App;
