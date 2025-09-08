import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import About from './components/About'
import SpecialMenu from './components/SpecialMenu'
import RegularFood from './components/RegularFood'
import Contact from './components/Contact'


const App = () => {
  return (
    <div className="h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
       <SpecialMenu /> 
      <RegularFood />
      <Contact />
      {/* <About /> */}
    </div>
  )
}

export default App