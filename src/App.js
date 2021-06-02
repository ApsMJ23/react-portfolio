import React from 'react'
import ReactProjectScreen from './Screens/ReactProjectScreen'
import HomeScreen from './Screens/HomeScreen'
import ResumeScreen from './Screens/ResumeScreen'
import ProShopScreen from './Screens/ProShopScreen'
import CocktailsScreen from './Screens/CocktailsScreen'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/proshop' component={ProShopScreen} />
        <Route path='/cocktails' component={CocktailsScreen} />
        <Route path='/reactprojects' component={ReactProjectScreen} />
        <Route path='/resume' component={ResumeScreen} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
