import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Banner_hero from './components/hero'
import OpenHours from './components/openHours'
import Services from './components/services'
import Appointment from './components/appointment'
import Testimonials from './components/testimonials'
import Location from './components/location'
import Choose_us from './components/choose_us'
import Gallery from './components/gallery'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner_hero />
      <OpenHours />
      <Services />
      <Choose_us />
      <Appointment />
      <Gallery />
      <Testimonials />      
      <Location /> 
      


      
      
    </>
  )
}

export default App
