const obtenerGifs = async (categoria) => {
    const api_key = '2YoVwESf4IRJwaY8QkdG0sbe13jxngZn';

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=${10}`;
    const resp = await fetch(url);
    const respJSON = await resp.json();

    const gifs = respJSON.data.map(img => {
        return {
            id: img.id,
            titulo: img.title,
            url: img.images.downsized_medium.url,
        }
    });

    console.log(gifs);
    return gifs;
}

export {
    obtenerGifs,
}