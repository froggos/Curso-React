import { useEffect } from "react"

const Message = () => {
  useEffect(() => {
    console.log("Mensaje montado.");
    return () => {
      console.log("Mensaje desmontado.")
    }
  }, [])
  

  return (
    <>
      <h1>Usuario ya existe</h1>
    </>
  )
}

export default Message
   