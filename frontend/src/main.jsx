// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.jsx'

import App from './App'
import Start from './Start/start.jsx'
import SignUp from './auth/sign-up.jsx'
import LogIn from './auth/log-in.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/start" element={<Start />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
