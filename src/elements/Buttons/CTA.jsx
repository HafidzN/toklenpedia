import React from 'react'
import './Buttons.scss'
const CTA = ({text, onClick}) => {
    return (
        <button className="ctaBtn" onClick={onClick}>{text}</button>
    )
}

export default CTA
