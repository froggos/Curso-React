import { useEffect, useState } from 'react'

import { obtenerGifs } from '../helpers/gifs.service';

export const useFetchGifs = (categoria) => {
    const [gifs, setGifs] = useState([]);
    const [estaCargando, setEstaCargando] = useState(true);

    useEffect(() => {
        const almacenarGifs = async () => {
            const gifs = await obtenerGifs(categoria);
            setGifs(gifs);
            setEstaCargando(false);
        }
        return almacenarGifs;
    }, [])

    return {
        gifs,
        estaCargando,
    }
}
