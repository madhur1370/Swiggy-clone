import React from 'react'
import ReactDOM from 'react-dom/client'
import  {BrowserRouter} from "react-router-dom"
import Approutes from "./Approutes.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Approutes/>
    </BrowserRouter>
  </React.StrictMode>,
)
