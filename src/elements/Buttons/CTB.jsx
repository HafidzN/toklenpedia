import React from 'react'
import './Buttons.scss'
const CTB = ({text, onClick}) => {
    return (
        <button className="ctbBtn" onClick={onClick}>{text}</button>
    )
}

export default CTB