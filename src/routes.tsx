import React from 'react'
import { Routes, Route} from 'react-router-dom'

import Cart from './pages/cart/cart'
import Home from './pages/home/home'

export default function routers() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </>
    )
}