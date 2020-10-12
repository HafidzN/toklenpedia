import React, {useState, useEffect} from 'react'
import './Carousel.scss'

const Carousel = ({images, userSelect}) => {
  const [activeImage, setActiveImage] = useState((images && images.length)? images[0] : '' )
  const changePreview = img => setActiveImage(img)

  useEffect(() => {
    setActiveImage((images && images.length)? images[0] : '' )
  }, [images])

  useEffect(() => {
    if(userSelect.length>0){
      changePreview(userSelect)
    }
  }, [userSelect])

  return (
    <div className="productCarousel">
      <div className="preview">
        <img className="content" src={`/productImages/${activeImage}.jpg`} alt="preview" /><br />
      </div>
      <div className="thumbnails">
         {
           images.map(image=>{
             return <div className="square" key={image}>
                <div className="box">
                  <img  src={`/productImages/${image}.jpg`} alt={image} onClick={()=>changePreview(image)} />                
                </div>
             </div>
           }).slice(0,3) 
         }
      </div>
    </div> 
  )
}

export default Carousel

