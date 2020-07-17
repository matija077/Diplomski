import React from 'react';
import './header.style.scss';

function Header() {
    var user = false;

    return(
        <div className="header">
            <div className="options">
                <span className="option">Home page</span>
                <span className="option">Projects</span>
                <span className="option">My Projects</span>
                {user ?
                    <span className="option">Sign out</span>
                :
                    <span className="option">Sign In</span>
                }
            </div>
        </div>
    );
}

export default Header;