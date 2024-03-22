import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DarkModeContextProvider } from '@context/darkModeContext'
import { AuthContextProvider } from './context/authContext.jsx'

import './style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(

    <DarkModeContextProvider>
      <AuthContextProvider>
        <App/>
      </AuthContextProvider>
    </DarkModeContextProvider>  
,
)
