import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/estilo.css'
import { ListasApp } from './UserApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListasApp/>
  </StrictMode>,
)
