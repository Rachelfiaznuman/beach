import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Des from './components/Des';
import Search from './components/Search';
import Selects from './components/Selects';
import Slider from './components/Slider';
import Footer from './components/Footer';
import './index.css'

function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Des/>
   <Search/>
   <Selects/>
   <Slider/>
   <Footer/>

   </>
  )
}

export default App



