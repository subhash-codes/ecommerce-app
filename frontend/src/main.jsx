import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
<<<<<<< HEAD

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
=======
import ShopContextProvider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
>>>>>>> 22643e8afa940b60f29613b014417e2ac6e2c3c7
  </BrowserRouter>,
)
