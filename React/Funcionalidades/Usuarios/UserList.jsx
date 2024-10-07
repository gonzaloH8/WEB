import { useFetchData } from "../Hooks/userFetchData"

// eslint-disable-next-line react/prop-types
export const UserList = ({ endPoint }) => {

const { data, isLoading } = useFetchData(endPoint)

return(
            <>
                <ul>
                    {isLoading 
                    ? <p>Cargando...</p>
                    : endPoint == 'users' 
                    ? data.map(item => <li key={item.id}>{item.name}</li>)
                    : data.map(item => <li key={item.id}>{item.body}</li>)
                    }
                </ul>
            </>
        )
    }
