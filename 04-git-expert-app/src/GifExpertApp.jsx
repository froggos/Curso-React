import { useState } from "react"
import AgregarCategoria from './components/AgregarCategoria';

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(["Elden Ring", "Jedi Knight III: Jedi Academy"]);

    const agregarCategoria = (categoria) => {
        setCategorias([...categorias, categoria]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            {/* 
                Versión antigua
                Le paso como propiedad al componente AgregarCategoria el método setCategorias. Este viene
                con el array de categorías.
                
                Versión nueva
                Creo un evento onNuevoValor al componente AgregarCategoria y a este le paso el método agregarCategoria, quien recibirá
                el valor que se emita en el componente hijo.
            */}
            <AgregarCategoria onNuevoValor={event => { agregarCategoria(event) }} /*setCategorias={setCategorias}*/></AgregarCategoria>

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
