import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/estilo.css'
import { UsuariosComponent } from './Componente/UsuariosComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuariosComponent/>
  </StrictMode>,
)
