import React from 'react'
import ReactProjectScreen from './Screens/ReactProjectScreen'
import HomeScreen from './Screens/HomeScreen'
import ResumeScreen from './Screens/ResumeScreen'
import ProShopScreen from './Screens/ProShopScreen'
import CocktailsScreen from './Screens/CocktailsScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' exact>
        <HomeScreen />
      </Route>
      <Route path='/proshop'>
        <ProShopScreen />
      </Route>
      <Route path='/cocktails'>
        <CocktailsScreen />
      </Route>
      <Route path='/reactprojects'>
        <ReactProjectScreen />
      </Route>
      <Route path='/resume'>
        <ResumeScreen />
      </Route>
      <Footer />
    </Router>
  )
}

export default App;
