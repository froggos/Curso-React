import { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({value}) => {
    
    console.log("render");

    const [counter, setCounter] = useState(value);
    
    const sumar = () => {
        setCounter(counter+value);
    }

    const restar = () => {
        setCounter(counter-value);
    }

    const reset = () => {
        setCounter(0);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={sumar}>+1</button>
            <button onClick={restar}>-1</button>
            <button onClick={reset}>Reiniciar</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

export default CounterApp;