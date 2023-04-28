import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainApp, Home, About, Project, NotFound } from '../../pages'
import { Navbar, Footer } from '../../component'

const RaouterApp = () => {
  return (
    <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>}/>
                <Route path='/project' element={<Project/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </Router>
    </>
  )
}

export default RaouterApp