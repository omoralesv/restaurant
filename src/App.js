import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Header from './container/Header/Header'
import AboutUs from './container/AboutUs/AboutUs'
import SpecialMenu from './container/SpecialMenu/SpecialMenu'
import Chef from './container/Chef/Chef'
import Intro from './container/Intro/Intro'
import Awards from './container/Awards/Awards'
import Gallery from './container/Gallery/Gallery'
import FindUs from './container/FindUs/FindUs'
import Footer from './container/Footer/Footer'


const App = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Awards />
        <Gallery />
        <FindUs />
        <Footer />
    </div>
  )
}

export default App