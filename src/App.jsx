import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ScrollTop from './ScrollTop/ScrollTop'
import './responsive.scss'
import Update from './Update/Update'
import Header2 from './Header2/Header2'
import Cards from './Cards/Cards'
import Trending from './Trending/Trending'
import Banner from './Banner/Banner'
import Picks from './Picks/Picks'
import National from './National/National'
import Politics from './Politics/Politics'
import International from './International/International'
import Sports from './Sports/Sports'
import Dashboard from './Dashboard/Dashboard'
import Admin from './Admin/Admin'
import Contact from './Contact/Contact'
import Message from './Message/Message'

function App() {
  return (
    <>
    <Header/>
    <Cards/>
    <Trending/>
    <Banner/>
    <Picks/>
    <National/>
    <Politics/>
    <Banner/>
    <International/>
    <Sports/>
    <Banner/>
    <ScrollTop/>
    <Footer/>
    <Message/>
    {/* <Contact/> */}
    
    {/* <Dashboard/> */}
    {/* <Admin/> */}


    {/* <Header2/> */}
    
    </>
  )
}

export default App