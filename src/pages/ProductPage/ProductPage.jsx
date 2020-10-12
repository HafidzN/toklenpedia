import React, { useState, useEffect, useContext} from 'react'
import {useHistory} from 'react-router'
import Previewer from '../../elements/CarouselAlice/Carousel'
import Carousel from '../../elements/Carousel/Carousel'
import Select from '../../elements/Select/Select'
import CTA from '../../elements/Buttons/CTA'
import './ProductPage.scss'
import {useParams} from 'react-router'
import { useMediaQuery } from 'react-responsive'
import {CartContext} from '../../contexts/CartContextProvider'
import {Action} from '../../contexts/CartReducers' 

const ProductPage = () => {
  const {productId} = useParams()
  const history = useHistory()
  const {cartProducts, dispatch} = useContext(CartContext)
  const [product, setProduct] = useState(null)  
  const [model, selectModel] = useState('')
  const [error, setError] = useState(false)

  const isMobile = useMediaQuery({ maxWidth: 500 })
  const minMedium = useMediaQuery({ minWidth: 501})
  const maxMedium = useMediaQuery({ maxWidth: 767})
  const isMedium = minMedium && maxMedium

  const [products, setProducts] = useState([])
  const [userSelect, onUserSelect] = useState('')

  const [localStorageData, setLocalStorageData] = useState([])

  console.log('cartProducts', cartProducts)
  console.log('localstorage',JSON.parse(localStorage.getItem('cartItems')))

  useEffect(() => {
    setLocalStorageData(JSON.parse(localStorage.getItem('cartItems')) || [])
  },[])

  useEffect(() => {
      fetch('http://localhost:7000/products').then (res=> res.json())
      .then(data=> {
        console.log(data)
          setProducts(data.sort((a,b)=>a.rate - b.rate).slice(0,5))
      })
  }, [])

  useEffect(() => {
      fetch('http://localhost:7000/products').then (res=> res.json())
      .then(data=> {
          setProduct(data.find(i=> i.id.toString() === productId.toString()))            
      })
  }, [productId])

  const callbackForSelect = value => {
    selectModel(value)
    const updatedPreview = `${productId}_${value}`
    onUserSelect(updatedPreview)
  } 



const addToCart = (items, product) =>  {
    console.log(items)
    const cartItems = [...items]
    console.log(cartItems)
    let productAlreadyInCart = false

    cartItems.forEach(item => {
        if (item.id === product.id) {
            productAlreadyInCart = true
            item.quantity ++
        }
    })
    if (!productAlreadyInCart) {
        cartItems.push({...product, quantity:1})
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

    dispatch ({
        type: Action.ADD_TO_CART,
        payload: {
            cartItems: cartItems
        }
    })

    history.push('/cart')
}




  const addToCartAction = () => {
    if (model.length>0){
      const newProduct = {
        id: `${productId}_${model}`,
        title: product.title,
        model,
        image: `${productId}_${model}`,
        price: product.price,
        description: product.description,
      }

      addToCart(localStorageData, newProduct)

      // dispatch({
      //   type: Action.ADD_TO_CART,
      //   product: newProduct
      // })

      setError(false)
    } else {
      setError(true)
      return
    }

  }

  return (
      <div className="app__content">
        <div className="productActions">
          <aside className="carousel">
              {product ? <Previewer images={product.images} userSelect={userSelect}/> : null}
          </aside>
          <div className="productDetails">
              <h1>{product && product.title}</h1>
              <div className="price">
                <div className="price__value">{`Rp. ${product ? product.price: 0}`}</div>
                {product && <Select text="Model" options = {product.availableSizes} callback={callbackForSelect} value={model} /> }
              </div>
              <div className="description">
                <p>{product && product.description}</p>
              </div>
              <hr/>
              <div className="addToCart">
                <CTA text="Add To Cart" onClick={addToCartAction}/>
                { error && <div className="error">Please select model</div> }
              </div>               
          </div>
        </div>

        <div className="similarProducts">
          <h1>Similar Products</h1>
          <Carousel numberOfCards={isMobile?1:(isMedium?2:3)} items={products} showInfo={true} landscape={true}/>
        </div>

      </div>
  )
}

export default ProductPage
