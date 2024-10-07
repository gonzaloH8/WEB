import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const ContadorApp = ({ value }) => {
  const [contador, setContador] = useState(value)

  const HanddleClick = () => {
    setContador(contador + 1)
  }
  return (
    <>
      <h1>Contador:  </h1>
      <p>{ contador }</p>
      <button onClick={HanddleClick}>Pulsa el boton</button>
    </>
  )
}
