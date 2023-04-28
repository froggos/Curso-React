import React from 'react'

export const GifGridItem = (props) => {
    return (
        <div className='card'>
            <img src={props.gifProps.url} alt={props.gifProps.titulo} />
            <p>
                {props.gifProps.titulo}
            </p>
        </div>
    )
}
