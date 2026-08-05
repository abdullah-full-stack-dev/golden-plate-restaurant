import React, { useEffect, useState } from 'react'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { Policy } from './pages/Policy'
import { Footer } from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { ScrollBtn } from './components/ScrollBtn'
import { ToastContainer } from 'react-toastify';

const App = () => {

  {/* Intro Animation */ }
  const [intro, setIntro] = useState(true);

  useEffect(() => {

    if (intro) {
      setTimeout(() => {
        setIntro(false)
      }, 2000)
    }
  }, [intro])

  return (
    <div>

      {/* Intro Animation */}
      <div className={`intro ${intro ? "true" : "false"}`}>
        <div className="circle"></div>
        <p className='text'>Golden Plate Restaurant</p>
        <span className="subtitle">unforgettable dining moments.</span>
      </div>

      <ToastContainer />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/policy' element={<Policy />} />
      </Routes>
      <ScrollBtn />
      <Footer />

    </div>
  )
}

export default App