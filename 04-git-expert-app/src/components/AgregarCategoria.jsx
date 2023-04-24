import React, { useState } from 'react'

const AgregarCategoria = (props) => {
    
    const [valorInput, setValorInput] = useState("");

    const cambioValor = (valor) => {
        setValorInput(valor);
    }

    const enviar = () => {
        props.setCategorias( categorias => [...categorias, valorInput]);
    }

    return (
        <form onSubmit={(event) => {event.preventDefault(); enviar()}}>
            <input type='text' placeholder='Buscar gifs' defaultValue={valorInput} onChange={(e) => {cambioValor(e.target.value)}}></input>
        </form>
    )
}

export default AgregarCategoria
