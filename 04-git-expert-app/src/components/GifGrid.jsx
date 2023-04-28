import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ categoria }) => {
    const { gifs, estaCargando } = useFetchGifs(categoria);

    console.log(estaCargando);

    return (
        <>
            <h3>
                {categoria}
            </h3>
            {
                estaCargando ? (<h2>Cargando...</h2>) : null
            }
            <div className='card-grid'>
                {
                    gifs.map(gif => {
                        return (
                            <GifGridItem key={gif.id} gifProps={gif}></GifGridItem>
                        )
                    })
                }
            </div>
        </>
    )
}
