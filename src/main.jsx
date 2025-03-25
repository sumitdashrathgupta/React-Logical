import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ProvideContext } from "./Application/Product_Search/Context/Context.jsx"


createRoot(document.getElementById('root')).render(
    <ProvideContext>
        <App />
    </ProvideContext>
)
