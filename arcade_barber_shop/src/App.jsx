import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Banner_hero from './components/hero'
import OpenHours from './components/openHours'
import Services from './components/services'
import Appointment from './components/appointment'
import Testimonials from './components/testimonials'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner_hero />
      <OpenHours />
      <Services />
      <Appointment />
      <Testimonials />
      
    </>
  )
}

export default App
