import React from 'react'
import ReactDOM from 'react-dom/client'
import Approutes from "./Approutes.jsx"
import { Provider } from 'react-redux'
import { store } from '../store/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <Approutes/>
    </Provider>
)
