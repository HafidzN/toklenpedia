import React, {useState, useEffect} from 'react'
import Card from '../../elements/Card/Card'
import './ShopPage.scss'

const ShopPage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:7000/products').then (res=> res.json())
        .then(data=> {
            console.log(data)
            setProducts(data)
        })
    }, [])

    return (
        <div className='app__content'>
          <h1 className='shopTitle'>Products</h1>
    
          <div className="productList">          
            {products.map(product=>{
                return <div className="product" key={product.id}>
                    <Card
                        id = {product.id}
                        // imgSrc={`/productImages/${product.sku}_${}.jpg`}
                        productName={product.title}
                        availableSizes = {product.availableSizes[0]}
                        price = {product.price}
                        showInfo={true}
                        maxText = {40}
                    />                
                </div>
            })}          
          </div>
        </div>
    )
}

export default ShopPage
