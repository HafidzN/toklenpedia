import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import Carousel from '../../elements/Carousel/Carousel'
import CTAButton from '../../elements/Buttons/CTA'
import './HomePage.scss'

const HomePage = () => {
    const isMobile = useMediaQuery({ maxWidth: 500 })
    const minMedium = useMediaQuery({ minWidth: 501})
    const maxMedium = useMediaQuery({ maxWidth: 767})
    const isMedium = minMedium && maxMedium
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:7000/products').then (res=> res.json())
        .then(data=> {
            setProducts(data.sort((a,b)=>a.rate - b.rate).slice(0,5))
        })
    }, [])

    return (
        <div className='app__content'>
            <h1 className='homeTitle'>Welcome to <span>Toklenpedia</span></h1>
            <Carousel numberOfCards={isMobile?1:(isMedium?2:3)} items={products} showInfo={false} landscape={true}/>
            <div className="cta">
               <Link to='/shop'>
                    <CTAButton text="Shop Now" onClick={()=>{}}/>
               </Link>
            </div>
        </div>
    )
}

export default HomePage
