import React from 'react';
import {Link} from 'react-router-dom'

export const Nav = () => (
    <nav className='navbar navbar-expand-lg navbar-light bg-primary'>
        <div className='navbarBrand'>Navbar</div>
        <ul className="navbar-nav">
            <li className='navbar-item'><Link exact className="nav-link" to='/'>Home</Link></li>
            <li className='navbar-item'><Link className="nav-link" to='/about'>About</Link></li>
        </ul>
    </nav>
 
)