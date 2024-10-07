import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/estilo.css'
import { CalculosPesados } from './Componente/CalculosPesados'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalculosPesados/>
  </StrictMode>,
)
