import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/market-logo.png'
import './AboutPage.scss'

const AboutPage = () => {
    return (
        <div className="app__content">
            <div className="aboutPage">
                <h1>About Your Shop</h1>
                <p>Toklenpedia is an Indonesian technology company specializing in e-commerce. It was founded in 2020 by Niki Tesla and Thomas Beta Edison. It is an Indonesian unicorn along with ride-hailing company Ngojek, travel service firm Traveloka, e-commerce Bukanbapak and fintech company OFO</p>
                <div className="aboutPage__footer">
                    <div className="shopDetails">
                       <div className="shopDetails__imageWrapper">
                          <Link to='/'><img className="content" src={logo} alt="market-logo"/></Link>
                       </div>
                       <div className="shopDetails__address">Semarang, Jawa Tengah</div>
                    </div>
                    <div className="links">
                       <div className="links__menu">
                          <h3>Main Menu</h3>
                          <ul>
                             <Link to="/"><li>Home</li></Link>
                             <Link to="/about"><li>About</li></Link>
                             <Link to="/shop"><li>Shop</li></Link>
                             <Link to="/help"><li>Help</li></Link>                 
                          </ul>
                       </div>
                       <div className="links__menu">
                          <h3>Company</h3>
                          <ul>
                             <li>The Company</li>
                             <li>Careers</li>
                             <li>Press</li>
                          </ul>
                       </div>
                       <div className="links__menu">
                          <h3>Discover</h3>
                          <ul>
                             <li>The Team</li>
                             <li>Our History</li>
                             <li>Brand Metro</li>
                          </ul>
                       </div>
                       <div className="links__menu">
                          <h3>FInd Us on</h3>
                          <ul>
                             <li>Facebook</li>
                             <li>Twitter</li>
                             <li>Instagram</li>
                          </ul>
                       </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
