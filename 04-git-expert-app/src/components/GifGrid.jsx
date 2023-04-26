import React from 'react'

export const GifGrid = ({ categoria }) => {

    const obtenerGifs = async () => {
        const api_key = '2YoVwESf4IRJwaY8QkdG0sbe13jxngZn';

        const url = `api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}`;
        const resp = await fetch(url);
        const respJSON = await resp.data;
        console.log(respJSON);
    }

    obtenerGifs();

    return (
        <>
            <h3>
                {categoria}
            </h3>
        </>
    )
}
