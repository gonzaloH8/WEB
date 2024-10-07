import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/estilo.css'
import { FormularioComponente } from './Componente/FormularioComponente'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormularioComponente/>
  </StrictMode>,
)
