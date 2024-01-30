import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Reports from '../pages/Reports'


const Layout = () => {
    return (
        <div className="layout">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/reports" element={<Reports />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Layout
