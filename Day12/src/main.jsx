import { StrictMode } from 'react'
import {createRoot} from 'react-dom/client'
//import './index.css'
import { BrowserRouter,HashRouter } from 'react-router-dom'
//import RouteApp from './RouteApp'
import App from './App'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
)
