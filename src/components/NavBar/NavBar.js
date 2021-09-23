import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
           
               <Link exact to="/movie-app/" className= "title">Movie App</Link>
        
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/movie-app/" >Home</NavLink>
                        <NavLink to="/movie-app/favs" >Favoritas</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}