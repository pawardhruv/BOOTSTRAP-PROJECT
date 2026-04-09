import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 
import Topbar from './components/Topbar'
import Header from './components/Header'
import Hero from './components/Hero'
import Thumbnail from './components/Thumbnail'
import Card from './components/Card'
import News from './components/News'
import Sponsers from './components/Sponsers'
import Footer from './components/Footer'




const App = () => {
  return (
    <>
      <Topbar/>
       <Header/>
        <Hero/>
         <Thumbnail/>
           <Card/>
         <News/>
        <Sponsers/>
      <Footer/>
    </>
  )
}

export default App
