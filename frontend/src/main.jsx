// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Start from './Start/Start.jsx'
import Auth from './auth/auth.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/start" element={<Start />} />
        <Route path="/sign-up" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
