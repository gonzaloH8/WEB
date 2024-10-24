# COMPONENTES
En las apliaciones de react nos dara una serie de comandos cortos para crear nuestros codigos mas facil
Para la creacion de componentes utilizaremos ffc(crea una funcion donde ejecutaremos la logica)

# VARIABLES
Todas las variables ingresadas dentro de {} puede ser imprimida en pantalla, menos los de tipo objeto
Los valores numericos en las propiedades definidas en el main se colocan entre {}

# JERARQUIA DENTRO DE LAS FUNCIONES
El codigo tiene que tener un padre para ser ejecutado, que en este caso sera el div root del HTML.
Para que esto funcione debemos integrar el codigo a ejecutar dentro de un elemento que pueden ser 3 formas distintas:
  1º Una etiqueta vacia <></> !la mas usada y actual
  2º import {Fragment} from "react" <Fragment></Fragment>
  3º Una cadena de cajas dentro de otras <div></div>(en deshuso)

# IMPORTACION DE ARCHIVOS 
0º !Importante. los importe se colocan al inicio del archivo, despues las variables y por ultimo los componentes
1º Creamos nuestro archivo
2º En el archivo main importamos los archivos si queremos que afecte a toda la pagina. import './style.css'
3º Si queremos que solo afecte a un solo componente apliaramos el import en archivo correspondiente

# PROPIEDADES
En las funciones se pueden incializar propiedades definidas en el main que estaran en los parentesis.
Una vez disponibles estas propiedades podemos imprimirlas en nuestra pagina dentro del componente <></>

Si tenemos problemas por incopatibilidad de tipos con sus valores podemos identificarlos los errores de tipado asi:
import PropTypes from 'prop.types'
NombreComponente.PropTypes = {
titulo: PropTypes.string.isRequired, // personalizamos los errores de tipado de las variables, obligandolas a ser del tipo requerido y definido
subTitulo: PropTypes.number.isRequired
}

Si queremos que en vez que nos salga un error de tipado, nos coloque un valor predefinido hacemos los siguiente
NombreComponente.default = {
titulo: "React",
subtitulo: "Seccion"
}
Otra forma de poner un valor por defecto es aplicandolo directamente en las propiedades de la funcionComponente

# EVENTOS
Tiene los mimos eventos que en JavaScript
Ejemplo de funcion con un solo argumento: 
  function NombreFunction(event){console.log(event)}
  <button Onclik={NombreFunction}>Soy un boton</button>
Ejemplo de funcion don mas de un argumento
  function NombreFunction(event, arg){console.log(event) console.log(arg)}
  <button Onclik={ (event) => NombreFunction(event, 'otro argumento')}>Soy un boton</button>

# ESTADOS
Llamar a la clase useState
import { useState } from "react"

# MAP y HERENCIA
    export const ListadoApp = () => {
    const addTask = () => {
    setArreglo([...arreglo, {nombre:'nuevo', visto:false}])
    }
    let listadoSecciones = [{nombre: 'Irina' visto: true},
          {nombre: 'Marcos' visto: true},
    {nombre: 'Daniel' visto: true},
    {nombre: 'Cristina' visto: true},
    {nombre: 'Sara' visto: true},
    ]
    const [arreglo, setArreglo] = useState([listadoSecciones])
    const onAgregarTarea = (val) => {
    let valor = val.trim()
    if(val < 1) return // si el valor en menor a 1 caracter se sale de la funcion
    const envio = {
    id = arreglo.length + 1, // si el id empieza desde 0 no hacer la suma
    nombre: valor,
    visto: false
    }
    setArreglo{...Arreglo, envio}
    }
      return(
      <>
        <h1>Listado de Temas del Curso</h1>
        <AgregarTarea agregarTarea=(onAgregarTarea)></AgregarTarea>
        <ul>
          {arreglo.map(item => <Item key={item.id} nombre={item.nombre} visto={item.visto}></Item>)}
        </ul>
    <button onClick={() => addTask()}>Agregar Tarea</button>
      </>
      )
    }

# CLASES JSX
En HTML el atributo CLASS para enlazar con CSS, en REACT se cambia por className

# FORMULARIO RELACION CON LA APLICACION ANTERIOR
    import { useState } from "react"
    export const AgregarTarea = (agregarTarea) => {
    (short code useState)const [unputValue, setInputValue] = useState('')
    const onInputChange =(event) => {
    setInputValue(evento.target.value)
    }
    const onSubmit = (event) =>{
    event.preventDefault()
    agregarTarea{inputValue}
    agregarTarea{tareas => [...tareas, envio]}
    }
    return(
    <form onSubmit={onSubmit}>
    <input type="text" placeholder="Ingresa Tarea" value={} onChange={onInputChange}
    </form>
    />
    )
    }

# CUSTOM(organizacion de codigo) HOOK(use...)
USEEFFECT(al hacer algo en el componente se ejecute una vez) Y FECTH
MAIN.jsx
import React from 'react'
import ReactDOM from 'react-dom/cliente'
import './styles.css'
import {UsersApp} from './ListadoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<ListadoApp/>
</React.ScritMode>
)

COMPONENTE UsersApp
import { useState useEffect} from 'react'
import { UserList } from "./componentes/userList"

export const UsersApp = () => {
const[ endPoint, setEndPoint] = useState('users')

const handleFetch = () => {setEndPoint('comments')}

return(
<>
<h1>Lista de Usuarios: </h1>
<ul>
  <UserList endPoint = {endPoint}></UserList>
</ul>
<button onClick=[handleFetch]>Aqui se llama a la API</button>
</>
)
}

COMPONENTE userList
import { useFetchData } from "./hooks/useFetchData"
export const UserList = ({endpoint} => {

const { data, isLoading } = useFetchData{endPoint}
return(
<>
<ul>
{isLoading ? <p>Cargando...></p> : endPoint == 'users' ? data.map(item => <li key={user.id}>{user.name}</li>)} : data.map(item => <li key={user.id}>{user.body}</li>)}
{users.map(user => <li ></li)}
</ul>
</>
)
})

HOOKS useFetchData.js
rafc(comando corto)
import { usteState , useEffect} from 'react'
import { fetchdata } from "../helpers/fetchData"
export const useFetchData = (endPoint) =>{

const[ data, setData] = useState([])
const[ isLoading, setIsLoading] = useState(true)

const getData = async () => {
const { data, isLoading } = await fetchdata(endPoint)
setData(data)
setIsLooading(isLoading)
}

useEffect (() => {
getData()
}, [endPoint])

return{data, isLoding}
)
}

HELPER fetchData.js
export const fetchData = async (endPoint) => {
try{
const response = await fetch(`URL de la lista de ususarios de JSON/${endPoint}`)
const data = await response.json()
console.log(data)
return{
data,
isLoading: false
}
}catch(e){
console.error(e)
}
}

HOOKS(USECOUNTER)
HooksApp.JSX
export const HooksApp = () => {
return(
<>

</>
)
}

ContadorComponentes.jsx
import { useConter } from "../hooks/useCounter"
export const ContadorComponentes = () => {
const{ contador, incrementar, resetear, decrementar } = useConter(0)
return(
  <>
  <h1>Contador: {contador}</h1>
  <button className "btn btn.primary" onClick={ () => incrementar(1)}>+1</button>
  <button className "btn btn.danger" onClick={ () => resetear()}>Reset</button>
  <button className "btn btn.primary" onClick={ () => decrementar(1, false)}>-1</button>
</>
)
}

HOOKS useCounter.js
import { useState } from "react"
export const useCounter = (valorInicial = 0) => {
  const [contador, setContador] = useState(valorInicial)

const incrementar = (valor = 1) => {
  setContador(contador + valor)
}
const resetear = () => {
  setContador(0)
}
const decrementar = (valor = 1, negativo = true) => {
if(!negativo && contador - valor < 0) {
setContador(0)
return
}
  setContador(contador - valor)
}

return{
contador, incrementar, resetear, decrementar
}
}

FORMULARIO(revesar parte del vida para pasarlos al hitbug)
FormularioComponente.jsx
import { useFomr } from "../hooks/useForm"
export const FormularioComponente = () => {

const initialForm = {
  userName: '',
  email: '',
  password: ''
}

const { formState, userName, email, password, onInputChange } = useFomrinitialForm)
const { userName, email, password } = formState

const onSubmit = (event) => {
event.preventDefault()
console.log(formState)
}
return(
<>
  <form onSubmit =(onSubmit)>
  Colocar el HTML de boostrap
</form>
</>
)
}

HOOKS
userFomr.js
import { userState } form "react"
export const useFomr = (initialForm = {})=>{

const [formState, setFormState] = useState(initialForm)

const onInputChange = ({target}) => {
const { name, value} = target
setFormState({
..formState,
[name]: value
})
}
return{
...fomrState,
formState,
onInputChange
}
}

USERFECTH
UsuariosComponentes.jsx
export const UsuariosComponentes =()=>{
const { data, isLoading, errors } = useFetch('urlde json usuarios')
return(
<>
<h1>Listado de Usuarios: </h1>
{isLoading 
? <h4>Cargando...</h4>
: errors 
? <p> ha ocurrido un error</p>
: 
meter tablas(mirar la parte del video)

}
</>
)
}

HOOKS
import { userState } form "react"
export const useFetch = () => {
const[state, setstate] = useState({
data: null,
isLoading : true,
errors : null
})
const getFetch = async() => {
if(!url) return
try{
const reponse = await fetch(url)
const data = await response.json()
setSate({
data,
isLoading: false,
errors: null
})
}catch(error){
setSate({
data:null
isLoading: false,
errors: error
}
}

useEffect( ()=>{
getFetch()},
[url]
)

return(
data,
isLoading,
errors
)
}

USEREF(enlaza una parte del jsx(HTML) con una informacion como referencia. Mantiene el foco en el elemento del HTML indicado)
const focusRef = useRef()
useEffect(()=>{
focusRef.current.focus()
},[])

En el HTML indicado añadir ref={focusRef}

USEMEMO(guarda los datos(varialbes) en memoria interna, para no volver a redibujar o recargar la pagina. En casos de llamados)
useMemo(()=> funcion, [dependencias])

import { useState } from 'react'
const getCalculo = (listaNumeros) => useMemo(() => {
console.log('Calculando')
return listaNumeros.reduce((a,b) => a * b)
}, [listaNumeros])

export const CalculosPesados = () => {

const listaNumeros = [1,2,3,4,5]
const [ show, setShow ] = useState(true)

const agregarNumero = () => {
setListaNumeros([...listaNumeros, [listaNumeros.length - 1 ] + 1)
}
return(
<>
<h1>Calculo: </h1>
<p>{ getCalculo(listaNumeros) }
<button onClick={() => setShow(|show)}>{show ? 'Show' : "Hide"}</button>
<button onClick={() => agregarNumero()}>Agregar numero</button>
</>
)
}

USECALLBACK(guarda en memoria interna metodos, para no volver a redibujar o recargar la pagina. En casos de llamados))
callBackComponent.JSX
import { useState } from "react"
import { Incrementar } from "./Incrementar"

export const callBackComponent = () => {

const [counter, setCounter] = useState(0)
const incrementarPadre = useCallback((val)=>{
setCounter(contador => + val)
},[])
return (
  <>
  <h1>Contador: {counter}
<Incrementar incrementar={incrementarPadre}></Incrementar>
</>
)
}

INCREMENTAR.JSX
import React from "react"
export const Incrementar = React.memo(({incrementar}) => {

console.log('me estoy redibujando)
return(
<button> onClick{()=> incrementar(10)}> +1</button>
)
}
)

REDUCE
listaTareas.jsx
const initialState = [{
id:1,
tarea: 'Explicar Reducers',
finalizada: false
}]

const nuevaTarea = {
id:2,
tarea: 'explicar useReducer',
finalizada: false
}
const agregarTarea = {
type: '[TAREAS] Agregar Tarea'
payload: nuevaTarea
}
const editarTarea = {
type: '[TAREAS] Editar Tarea'
playload: nuevaTarea
}
const eliminarTarea = {
type: '[TAREAS] Eliminar Tarea'
}
const borrarTarea = {
type: '[TAREAS] Borrar Tarea'
}

action = {
type: '[TAREAS] Agregar Tarea',
payload: nuevaTarea
}

const tareaReducer = (state = initialState, action = {}) => {
  switch (action.type){
case '[TAREAS] Agregar Tarea':
  return [..state, action.payload]
case '[TAREAS] Editar Tarea':
  //return [..state, action.payload]
case '[TAREAS] Eliminar Tarea':
 // return [..state, action.payload]
case '[TAREAS] Borrar Tarea':
  return []
default:
break;
  }
return state
}

console.log(tareaReducer(initialState, agregarTarea))

export const ListaTareas = () => {
return(
<>
<h1>Lista de Tareas: </h1>
</>
)
}

USEREDUCER


