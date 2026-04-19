import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './Router/router.jsx'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-[#faf4ec]'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
