import { useState } from 'react'
import './App.css'
import Hero from './components/Hero.jsx'
import Navbar from './components/navbar.jsx'
import ServicesSection from './components/ServiceSection.jsx'
import Tour from './components/tour.jsx'
import ContactSection from './components/ContactSection.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
       <Navbar/>
       <Hero/>
       <Tour/>
       <ServicesSection/>
       <ContactSection/>
       
        
       
     </div>
    </>
  )
}

export default App
