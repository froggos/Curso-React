import React, { useState } from 'react'

// Dentro de los props de AgregarCategoria está el método setCategorias del component GifExpertApp
const AgregarCategoria = (props) => {

    const [valorInput, setValorInput] = useState('');

    const cambioValor = (valor) => {
        setValorInput(valor);
    }

    // Versión antigua

    // Aquí se extrae el método setCategorias, y se ejecuta un método con callback para utilizar las categorías que ya
    // venían del método y utilizarlas para agregar una nueva categoría y no reemplazar todas las categorías con la nueva
    // categoría.

    // Versión nueva
    // Ahora en las props envío un evento onNuevoValor que hace llamado a un evento del componente padre.
    // El componente del padre recibe el valor de valorInput como event.
    const enviar = () => {
        const valorLimpio = valorInput.trim();
        if (valorLimpio.length <= 1) return;
        // props.setCategorias(categorias => [...categorias, valorInput]);
        props.onNuevoValor(valorLimpio);
        setValorInput('');
    }

    return (
        <form onSubmit={(event) => { event.preventDefault(); enviar() }}>
            <input type='text' placeholder='Buscar gifs' value={valorInput} onChange={(e) => { cambioValor(e.target.value) }}></input>
        </form>
    )
}

export default AgregarCategoria
