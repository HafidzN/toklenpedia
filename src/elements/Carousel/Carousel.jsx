import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import Card from '../Card/Card'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import './Carousel.scss'

export default ({numberOfCards, items, showInfo, landscape}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const chevronWidth = 0

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numberOfCards}
        gutter={20}
        leftChevron={ 
          <div className="sliderButton back">
            <ArrowBackIosIcon />
          </div>
        }
        rightChevron={
          <div className="sliderButton forward">
            <ArrowForwardIosIcon />
          </div>          
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {
            items && items.map(item=>{
                return <Card key    = {item.id}
                             id     = {item.id}
                             availableSizes = {item.availableSizes[0]}
                             productName = {item.title}
                             price = {item.price}
                             showInfo = {showInfo}
                             landscape = {landscape}
                />
            })
        }
      </ItemsCarousel>
    </div>
  )
}