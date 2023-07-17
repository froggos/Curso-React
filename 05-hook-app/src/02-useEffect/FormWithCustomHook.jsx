import { useEffect } from 'react'
import useForm from '../hooks/useForm';

const FormWithCustomHook = () => {
    const {formState, enCambioInput, usuario, email, password, onResetForm} = useForm({
        usuario: "",
        email: "",
        password: "",
    });

    useEffect(() => {


        return () => {

        }
    }, [formState]);

    return (
        <>
            <h1>Formulario con custom Hook</h1>
            <hr />
            <input onChange={enCambioInput} type="text" className='form-control' placeholder='Usuario' name='usuario' value={usuario} />
            <input onChange={enCambioInput} type="email" className='form-control mt-3' placeholder='benja.v.o@hotmail.com' name='email' value={email} />
            <input onChange={enCambioInput} type="password" className='form-control mt-3' placeholder='Contrasenia' name='password' value={password} />

            <button onClick={onResetForm} className='btn btn-primary mt-2'>Borrar</button>
        </>
    )
}

export default FormWithCustomHook
