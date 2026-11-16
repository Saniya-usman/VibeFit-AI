// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Front from './Front.jsx'
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
  
// <BrowserRouter>
//     <Front />
// </BrowserRouter>
   
      
   
  
// )

// 

import { createRoot } from 'react-dom/client'
import './index.css'
import Front from './Front'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Signup from './pages/Signup'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      {/* Front Page */}
      <Route path="/" element={<Front />} />

      {/* Login & Signup (NO NAVBAR) */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Main App (WITH NAVBAR) */}
      <Route path="/*" element={<App />} />

    </Routes>
  </BrowserRouter>
)
