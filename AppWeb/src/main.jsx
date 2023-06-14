import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './context/AuthContect'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
  </AuthProvider>
  </React.StrictMode>,
)
