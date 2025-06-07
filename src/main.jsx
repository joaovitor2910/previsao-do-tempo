import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Containers/Home/index.jsx'
import GlobalStyles from './styles/globalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <GlobalStyles />
  </StrictMode>,
)
