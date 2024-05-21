import React from 'react';
import img1 from '../../assets/logo.png';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={img1} alt=" " />
            </div>
            <nav className="header-nav">
                <ul className="nav-items">
                    <li className="nav-item">
                        <a href="#courses">Courses</a>
                    </li>
                    <li className="nav-item">
                        <a href="#search">Search</a>
                    </li>
                    <li className="nav-item">
                        <a href="#log-in">Log in</a>
                    </li>
                    <li className="nav-item">
                        <a href="#sign-up">Sign up</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
