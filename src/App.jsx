import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import BestSelling from './components/BestSelling'

const App = () => {
  return (
    <div className="h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <BestSelling />
    </div>
  )
}

export default App