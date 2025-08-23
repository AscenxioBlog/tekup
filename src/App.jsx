import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainHome from './UI/Home/MainHome'
import MainAbout from './UI/About/MainAbout'
import MainFaq from './UI/Faq/MainFaq'
import MainService from './UI/Service/MainService'
import MainTeam from './UI/Team/MainTeam'
import MainContact from './UI/Contact/MainContact'
import MainPortfolio from './UI/Portfolio/MainPortfolio'
import Header from './Constant/Header'
import Footer from './Constant/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/about" element={<MainAbout />} />
          <Route path="/faq" element={<MainFaq />} />
          <Route path="/services" element={<MainService />} />
          <Route path="/team" element={<MainTeam />} />
          <Route path="/contact" element={<MainContact />} />
          <Route path="/portfolio" element={<MainPortfolio />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App