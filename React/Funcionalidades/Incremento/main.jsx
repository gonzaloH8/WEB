import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/estilo.css'
import { CallBackComponent } from './Componente/CallBackComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CallBackComponent/>
  </StrictMode>,
)
