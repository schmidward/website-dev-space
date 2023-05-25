import React from 'react';
import { Link } from 'react-router-dom'
import './header.css'


function Header() {

    return (
        <>
        <header>
            <div className='header-container'>
            <div className='logo'>
                <h1><Link to="/">DiscoverMOTrails</Link></h1>
            </div>
                <nav>
                    <ul className='nav-links'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/mywork">My Work</Link>
                        </li>
                        <li>
                            <Link to="/about">About Me</Link>
                        </li>
                        <li>
                            <Link to="/resume">Resume</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    );
}

export default Header;