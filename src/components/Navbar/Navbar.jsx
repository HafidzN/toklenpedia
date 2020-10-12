import React, {useState} from 'react'
import {useLocation} from 'react-router'
import {Link, NavLink} from 'react-router-dom'
import Search from '../../elements/Search/Search'
import logo from '../../assets/market-logo.png'

import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import HelpIcon from '@material-ui/icons/Help'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import './Navbar.scss'

const Navbar = () => {
   const [text, setText] = useState('')
   const {pathname} = useLocation()

    return (
        <header className="navbar">
            <Link to='/' className="navbar__logo">
               <img src={logo} alt="market-logo"/>
            </Link>

            {
               ( !pathname.includes('/cart') && pathname !== '/about' && pathname !== '/help' && !pathname.includes('/product')) && <div className="navbar__search">
                  <Search
                        value={text} 
                        onChange = {(e)=>setText(e.target.value)}
                        onClick={()=>setText('')}           
                        placeholder='Search' 
                     />
               </div>
            }
            
            <nav className="navbar__navigation">
               <ul>
                    <NavLink to='/' exact={true} activeClassName ='active'>
                       <div className="iconWrapper noncart">
                          <HomeIcon />
                       </div>
                       <div className="menu">Home</div>
                    </NavLink>
                    <NavLink to='/about' activeClassName ='active'>
                       <div className="iconWrapper noncart">
                          <InfoIcon />
                       </div>
                       <div className="menu">About</div>
                    </NavLink>
                    <NavLink to='/shop' activeClassName ='active'>
                       <div className="iconWrapper noncart">
                          <LocalMallIcon />
                       </div>
                       <div className="menu">Shop</div>                    
                    </NavLink>
                    <NavLink to='help' activeClassName ='active'>
                       <div className="iconWrapper noncart">
                          <HelpIcon />
                       </div>
                       <div className="menu">Help</div>
                    </NavLink>
                    <NavLink to='/cart' activeClassName ='active'>
                       <div className="iconWrapper"><ShoppingCartIcon /></div>
                       <div className="menu">Your Cart</div>
                    </NavLink>
               </ul>
            </nav>
        </header>
    )
}

export default Navbar
