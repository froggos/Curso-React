import { useState } from "react"
import AgregarCategoria from './components/AgregarCategoria';

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(["Elden Ring", "Jedi Knight III: Jedi Academy"]);

    const agregarCategoria = () => {
        setCategorias([...categorias, "League of Legends"]);
    }
    
    return (
        <>
        <h1>GifExpertApp</h1>

        <AgregarCategoria setCategorias={setCategorias}></AgregarCategoria>

        <ol>
            {
                categorias.map(categoria => {
                    return <li key={categoria}>{categoria}</li>
                })
            }
        </ol>
        </>
    );
}

export default GifExpertApp
