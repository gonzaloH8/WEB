import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/estilo.css'
import { HooksApp } from './Componente/HooksApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HooksApp/>
  </StrictMode>,
)
