import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
           
               <Link exact to="/" className= "title">Movie App</Link>
        
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/favs" >Favoritas</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}