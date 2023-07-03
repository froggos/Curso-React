import React from 'react'
import { useCounter } from '../hooks/useCounter'

const CounterWithCustomHook = () => {
    const { counter, incremento, decremento, reiniciar } = useCounter(2);

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />
            <button onClick={ () => incremento(2)} className='btn btn-primary'>+1</button>
            <button onClick={ reiniciar } className='btn btn-primary'>Reiniciar</button>
            <button onClick={() => decremento()} className='btn btn-primary'>-1</button>
        </>
    )
}

export default CounterWithCustomHook
