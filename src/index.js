import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CartContextProvider from './contexts/CartContextProvider'

ReactDOM.render(
    <CartContextProvider>
        <App />
    </CartContextProvider>
,document.getElementById('root'))
