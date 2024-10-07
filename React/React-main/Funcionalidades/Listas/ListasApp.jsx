import { useState } from "react"
import { AgregarTarea } from "./AgregarTarea"

// PADRE

// eslint-disable-next-line react/prop-types
const Items = ({ nombre, visto }) =>{
  return (
    <li className="Rojo">
      {nombre}
      {visto ? '✅' : '⛔'}
    </li>
  )
}

export const ListasApp = () => {
 
  let listadoSecciones = [
    {id: 0, nombre: 'Irina', visto: true},
    {id: 1, nombre: 'Marcos', visto: true},
    {id: 2, nombre: 'Daniel', visto: true},
    {id: 3, nombre: 'Cristina', visto: true},
    {id: 4, nombre: 'Sara', visto: true},
  ]

  const [arreglo, setArreglo] = useState(listadoSecciones)

  const onAgregarTarea = (val) => {
    let valor = val.trim()
    if(valor < 1 ) return 
    const envio = {
      id: arreglo.length,
      nombre: valor,
      visto: false
    }
      setArreglo([...arreglo, envio])
  }
 
    return (
    <>
    <h1>Listas: </h1>
    <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
    <ol>
      {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto}></Items>)}
    </ol>
    </>
  )
}
