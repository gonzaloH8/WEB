import { useState} from 'react'
import { UserList } from "../Componente/UserList"

export const UserApp = () => {
const[ endPoint, setEndPoint] = useState('users')

const handleFetch = () => {setEndPoint('comments')}

return(
<>
<h1>Lista de Usuarios: </h1>
<ul>
  <UserList endPoint = {endPoint}></UserList>
</ul>
<button onClick={handleFetch}>Aqui se llama a la API</button>
</>
)
}
