import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router'
import CancelIcon from '@material-ui/icons/Cancel'
import Card from '../../elements/Card/Card'

import './Previewer.scss'

const Previewer = () => {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState(null)
    const {productId} =  useParams()
    const history = useHistory()
    const closePreview = () => history.push('/shop')

    useEffect(() => {
        fetch('http://localhost:7000/products').then (res=> res.json())
        .then(data=> {
            setProducts(data)
            setProduct(data.find(i=> i.id.toString() === productId.toString()))            
        })
    }, [])

    useEffect(() => {
        if(productId && products.length>0){
            console.log(products.find(i=> i.id.toString() === productId.toString()))
            setProduct(products.find(i=> i.id.toString() === productId.toString()))
        }
    }, [productId])

    return (
        <div className="previewer">
          <div className="cardHolder">
          <div className="closeBtn" onClick={closePreview}>
             <CancelIcon /> 
          </div>
           <Card 
              id = {product && product.id}
              availableSizes = {product && product.availableSizes[0]}
              productName={product && product.title}
              price = { product && product.price}
              showInfo={true}
              maxText = {20}
           />          
          </div>
        </div>
    )
}

export default Previewer
