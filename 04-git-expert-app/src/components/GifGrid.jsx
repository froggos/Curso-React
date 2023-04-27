import React, { useState, useEffect } from 'react'
import { obtenerGifs } from '../helpers/gifs.service';

export const GifGrid = ({ categoria }) => {
    useEffect(() => {
        const obtener = async () => {
            await obtenerGifs(categoria);
        }
        return obtener;
    }, [])

    // const gifs = obtenerGifs(categoria);
    // gifs.then(gif => {
    //     console.log(gif);
    // })

    return (
        <>
            <h3>
                {categoria}
            </h3>
        </>
    )
}
