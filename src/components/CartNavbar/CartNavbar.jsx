import React from 'react'
import {NavLink} from 'react-router-dom'
import './CartNavbar.scss'

const CartNavbar = () => {
    return (
        <nav className="chart__nav">
            <NavLink to='/cart/' exact={true} activeClassName='active'>Shopping Cart</NavLink>
            <NavLink to='/cart/shippingdetails' activeClassName='active'>Shipping Details</NavLink>
            <NavLink to='/cart/paymentoptions' activeClassName='active'>Payment Options</NavLink>
        </nav>
    )
}

export default CartNavbar
