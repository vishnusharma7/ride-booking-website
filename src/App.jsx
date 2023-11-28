import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Result from './pages/Result'
import Detail from './pages/Detail'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
   <BrowserRouter >
   <Header />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/detail" element={<Detail />} />
    <Route path="/result" element={<Result />} /> 
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App