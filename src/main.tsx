import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LangaugeProvider } from './context/countriesContext.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <LangaugeProvider>
        <App />
      </LangaugeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
