import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Testimonial from './components/Testimonial'
import Carousel from './components/Carousel'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Newsletter />
      <Cards />
      <Carousel />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
