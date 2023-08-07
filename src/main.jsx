import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import NavBar from './components/common/NavBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <App />
  </React.StrictMode>,
)
