import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ConsumoDeApi from './components/ConsumoDeApi.jsx'
import { Registar } from './components/registar'
import { ConsumoAmazon } from './components/ConsumoAmazon'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < ConsumoAmazon />
  </React.StrictMode>,
)
