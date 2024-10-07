import { useState } from 'react'

// HIJO DE LISTASASAPP

// eslint-disable-next-line react/prop-types
export const AgregarTarea = ({ agregarTarea }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault() // permite que no se actualize la pagina
        agregarTarea(inputValue)
    }
  return ( 
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder='Ingresara tarea nueva'
            value={inputValue}
            onChange={onInputChange}
        />
    </form>      
  )
}
