import React from 'react'
import {NavLink} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

import './BottomNav.scss'

const BottomNav = () => {
  return (
    <div className="bottomNav">
       <nav>
          <NavLink exact to='/' activeClassName='bottomNav__active'><HomeIcon /></NavLink>
          <NavLink to='/about' activeClassName='bottomNav__active'><PanoramaFishEyeIcon /></NavLink>
          <NavLink to='/shop' activeClassName='bottomNav__active'><NotificationsNoneIcon /></NavLink>
          <NavLink to='/help' activeClassName='bottomNav__active'><MailOutlineIcon /></NavLink>
          <NavLink to='/cart' activeClassName='bottomNav__active'><MailOutlineIcon /></NavLink>
       </nav>
    </div>
  )
}

export default BottomNav
