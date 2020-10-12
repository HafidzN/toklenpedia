import React, {useState, useContext} from 'react'
import NumericInput from 'react-numeric-input'
import { useMediaQuery } from 'react-responsive'
import { CartContext } from '../../contexts/CartContextProvider'
import { Action } from '../../contexts/CartReducers' 
import './CartProductList.scss'

const CartProduct = ({product, products}) => {
    const {id, description, model, price, quantity, title} = product
    const isMobile = useMediaQuery({ maxWidth: 500 })
    const { dispatch} = useContext(CartContext)
    const [val, setVal] = useState(quantity)

    const removeFromCart = (items, item) => {
        const cartItems = items.slice().filter(product => product.id !== item.id)
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        dispatch ({
            type    : Action.REMOVE_FROM_CART,
            payload : {
                cartItems: cartItems
            }
        })
    }

    const onChangeValue = (value) => {
        setVal(value)
        const newProduct = product
        newProduct.quantity = value
        const getIndex = products.findIndex(item => item.id === id)
        if (value === 0){
            removeFromCart(products, product)
        } else {
        products.splice(getIndex,1,newProduct )
        localStorage.setItem('cartItems', JSON.stringify(products))
        }
    }

    return (
        <div className="cartProduct" id={id}>
           <div className="cartProduct__imageWrapper">
             <img src={`/productImages/${id}.jpg`} alt={id}/>
           </div>
           <div className="cartProduct__actions">
                <div className="cartProduct__actions__productInfo">
                    <h1 className="title">{title}</h1>
                    <div className="model">Model: {model}</div>
                    <div className="description">{description}</div>
                    <div className="price">{price*quantity}</div>
                </div>
                <div className="cartProduct__actions__quantity">
                        <NumericInput 
                            className="form-control" 
                            value={ val } 
                            min={ 0 } 
                            step={ 1 } 
                            precision={ 0 } 
                            size={ 5 }
                            onChange={(value)=>onChangeValue(value)} 
                            mobile = {isMobile}
                        />          
                </div>

           </div>
        </div>
    )
}

const CartProductList = ({cartItems}) => {
    return (
        <div className="cartProductList">
            {
              cartItems && cartItems.map(cartItem=>{
                  return <CartProduct key={cartItem.id} product={cartItem} products={cartItems}/>
              })    
            }
        </div>
    )
}

export default CartProductList
