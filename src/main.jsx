// src/main.jsx
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './contexts/ThemeProvider'
import { Toaster } from 'react-hot-toast'

import App from './App'
import './styles/index.css'   // ou './index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </ThemeProvider>
  </StrictMode>
)