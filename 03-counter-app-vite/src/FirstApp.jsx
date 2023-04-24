import PropTypes from 'prop-types';

const FirstApp = ({action, subtitle = "El final se aproxima"}) => {

    let name = (valor) => {
        let valores = {
            "saludar": "Wena los cabros",
            "despedirse": "Chao cabros suscribanse", 
            "default": "Hey muchachos, ustedes escucharon el rempalago",
        };

        return valores[valor];
    }
    
    return (
        <>
            <h1>{name(action)}</h1>
            <p>{subtitle}</p>
        </>
    );
}

FirstApp.propTypes = {
    action: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    action: "default",
    subtitle: "El final es incierto"
} 

export { FirstApp };