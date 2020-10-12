import React, {useState, useEffect, useContext} from 'react'
import {useHistory} from 'react-router'
import {CartContext} from '../../contexts/CartContextProvider'
import CartProductList from '../../components/CartProductList/CartProductList'
import CTA from '../../elements/Buttons/CTA' 
import CTB from '../../elements/Buttons/CTB' 
import './ShoppingCartPage.scss'

const ShoppingCartPage = () => {
    const history = useHistory()
    const {cartProducts} = useContext(CartContext)
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || [])

    useEffect(() => {
       setCartItems(JSON.parse(localStorage.getItem('cartItems')))
    },
    [cartProducts]
    )

   //  const subtotal = cartItems.reduce((a,c)=>a+c.price*c.quantity,0)

    return (
        <>
        <div className="shoppingCart">
           <div className="shoppingCart__products">
              <h1>Shopping Cart</h1>
              { cartItems.length>0 ?
              <CartProductList cartItems = {cartItems}/>
              :
              <div className="shoppingCart__products__message">Your cart is empty</div>
              }
           </div>

           <div className="shoppingCart__summary">
              <h1>Summary</h1>
              <h3>Enter Coupon COde</h3>
              <div className="totals">
                 <div className="totals__value">
                    <h3>subtotal</h3>
                    <span>rp.</span>
                 </div>
                 <div className="totals__value">
                    <h3>shiping</h3>
                    <span>free</span>
                 </div>
                 <div className="totals__value">
                    <h3>taxes</h3>
                    <span>Rp. 0</span>
                 </div>
              </div>
              <div className="finalTotal">
                 <h2>TOtal</h2>
                 <span></span>
              </div>
           </div>
        </div>
        <div className="shoppingButtons">
           <div className="shoppingButtons__child" onClick={()=> history.push('/cart/shippingdetails')}><CTA text="Next" /></div>
           <div className="shoppingButtons__child" onClick={()=> history.push('/shop')}><CTB text="Back" /></div>
        </div>
        </>
    )
}

export default ShoppingCartPage
