import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ShoppingCartPage from '../ShoppingCartPage/ShoppingCartPage'
import ShippingDetailsPage from '../ShippingDetailsPage/ShippingDetailsPage' 
import './CartPage.scss'

const CartPage = () => {
    return (
        <div className='cartContainer'>
            <Switch>
               <Route path='/cart' exact>
                  <ShoppingCartPage />
               </Route>
               <Route path='/cart/shippingdetails' exact>
                  <ShippingDetailsPage />
               </Route>
               <Route path='/cart/paymentoptions' exact>
                  <div>Payment</div>
               </Route>
            </Switch>
        </div>
    )
}

export default CartPage
