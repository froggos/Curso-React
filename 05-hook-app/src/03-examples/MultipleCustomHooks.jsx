import useFetch from "../hooks/useFetch"

const MultipleCustomHooks = () => {
    const { data, isLoading, hasError } = useFetch("https://api.breakingbadquotes.xyz/v1/quotes/5");

    console.log(data, isLoading, hasError);
     
    return (
        <>
            <h1>Breaking Bad quotes</h1>
            <hr />

            {
                isLoading ? (
                    <div className="alert alert-info text-center">
                        Cargando ...
                    </div>
                ) : (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1">Hola mundo</p>
                        <footer className="blockquote-footer">Benjamin Osorio</footer>
                    </blockquote>
                )
            }


        </>
    )
}

export default MultipleCustomHooks
