import { useState } from "react";

const useForm = (formInicial  = {}) => {
    const [formState, setFormState] = useState(formInicial);

    const enCambioInput = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const onResetForm = () => {
        setFormState(formInicial);
    }

    return {
        ...formState,
        formState,
        enCambioInput,
        onResetForm,
    }
}

export default useForm
