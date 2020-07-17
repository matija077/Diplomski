import React from 'react';
import './header.style.scss';

function Header() {
    return(
        <div className="header">
            <div className="options">
                <span className="option">Home page</span>
                <span className="option">Projects</span>
                <span className="option">My Projects</span>
            </div>
        </div>
    );
}

export default Header;