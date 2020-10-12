import React from 'react'
import {Link} from 'react-router-dom'
import './Card.scss'

import { useMediaQuery } from 'react-responsive'

const Card = ({id, imgSrc, productName, price, availableSizes,  maxText, showInfo, landscape}) => {
    const isMobile = useMediaQuery({ maxWidth: 500 })

    return (
        <div className={`card ${landscape && 'landscape'}`}>
            <div className="imageWrapper">
               <Link to={`/product/${id}`}>
                   <img src={`/productImages/${id}_${availableSizes}.jpg`} alt={productName} className="content"/>
               </Link>
            </div>
            {
                showInfo && <Link to={isMobile?`/product/${id}`:`/shop/${id}`}>
                    <div className="productInfo">
                        <div className="productName">{productName && productName.length> maxText? `${productName.slice(0,maxText-3)} ...`: productName}</div>
                        <div className="price">{`Rp. ${price}`}</div>            
                    </div>
                </Link>
            }
        </div>
    )
}

export default Card
