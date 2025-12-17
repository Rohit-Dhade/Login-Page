import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Createdsuccessfully from './components/Createdsuccessfully.jsx'
import HomePag from './components/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Createdsuccessfully/> */}
    {/* <HomePag/> */}
  </StrictMode>,
)
