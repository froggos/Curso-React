import { useEffect } from "react"

const Message = () => {
    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            const coords = { x, y };
            console.log(coords);
        }

        window.addEventListener('mousemove', onMouseMove);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, []);


    return (
        <>
            <h1>Usuario ya existe</h1>
        </>
    )
}

export default Message
