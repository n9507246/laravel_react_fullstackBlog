import React from 'react'
import ReactDOM from 'react-dom/client'
import { DarkModeContextProvider } from '@context/darkModeContext'
import { AuthContextProvider } from './context/authContext.jsx'
import { RouterProvider } from "react-router-dom"
import router from "@routes"


import './style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(

    <DarkModeContextProvider>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </DarkModeContextProvider>  
,
)
