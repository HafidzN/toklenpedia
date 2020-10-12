import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Previewer from './components/Previewer/Previewer'
import CartNavbar from './components/CartNavbar/CartNavbar'
// import BottomNav from './components/BottomNav/BottomNav'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ProductPage from './pages/ProductPage/ProductPage'
import CartPage from './pages/CartPage/CartPage'

import './App.scss'

const App = () => {

  return (
    <div className="app">
      <Router>
         <div className="navbarWrapper">
            <Navbar />
         </div>

         <Switch>
            <Route exact path='/'>
               <HomePage />
            </Route>
            <Route path='/about'>
               <AboutPage />
            </Route>
            <Route path='/shop'>
               <div className="shopPage">
                  <Switch>
                     <Route path='/shop/:productId' exact> 
                        <Previewer />
                     </Route>
                  </Switch>
                  <ShopPage />
               </div>
            </Route>
            <Route path='/help'>
               <div className="app__content">
               Help
               </div>
            </Route>
            <Route path='/cart'>
               <div className="app__content">
                  <div className="cartPage">
                     <CartNavbar />
                  </div>
                  <CartPage />                     
               </div>
            </Route>
            <Route path='/product/:productId'>
               <ProductPage />
            </Route>
         </Switch>
            
      </Router>
    </div>
  )
}

export default App
