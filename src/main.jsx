import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Explore from './UI/Home/Explore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Explore/> */}
  </StrictMode>,
)
