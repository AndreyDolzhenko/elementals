import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' // это и есть наше приложение
import './index.css'
import Header from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>    
    <App />
  </React.StrictMode>,
)
