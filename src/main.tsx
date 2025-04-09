import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ProviderContext from './context/ContextPDF.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProviderContext>
      <App />
    </ProviderContext>
  </StrictMode>,
)
