import React, { useEffect, useState } from 'react'
import Message from './Message';

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        usuario: "sapo",
        email: "benja.v.o@hotmail.com"
    });

    const { usuario, email } = formState;

    const enCambioInput = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    useEffect(() => {


        return () => {

        }
    }, [formState]);


    return (
        <>
            <h1>Formulario simple</h1>
            <hr />
            <input onChange={enCambioInput} type="text" className='form-control' placeholder='Usuario' name='usuario' value={usuario} />
            <input onChange={enCambioInput} type="email" className='form-control mt-3' placeholder='benja.v.o@hotmail.com' name='email' value={email} />

            {
                (usuario === "sapo") && <Message></Message>
            }
        </>
    )
}

export default SimpleForm
