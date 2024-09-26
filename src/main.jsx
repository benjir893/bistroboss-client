import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routers/Routers'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Authentication/AuthProvider'

createRoot(document.getElementById('root')).render(
  <div className="max-w-screen-xl mx-8">
    <StrictMode>
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router}></RouterProvider>
        </HelmetProvider>
      </AuthProvider>
    </StrictMode>,
  </div>
)
