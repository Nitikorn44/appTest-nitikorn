import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import Home from './home'
import Product from './product'
import Member from './member'



export default function Navbar_router() {
    return (
        <div>
            <BrowserRouter>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container-fluid">
                        <ul className="navbar-nav nav-pills">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link " >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/members" className="nav-link" >Member</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/products" className="nav-link" >Product</NavLink>
                            </li>

                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/members' element={<Member />} />
                    <Route path='/products' element={<Product />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export const Footer=()=>{ //Arrow Function
    return(
        <div style={{textAlign: 'center'}}>
            &copy;{new Date().getFullYear()} All rights reserved
        </div>

    )
}