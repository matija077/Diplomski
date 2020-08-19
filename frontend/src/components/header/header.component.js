import React from 'react';

import {Link} from 'react-router-dom';

import './header.style.scss';

function Header({setUser}) {
    var user = false;

    return(
        <div className="header">
            <div className="options">
                <Link to="/" className="option">Home page</Link>
                <Link to="/projects" className="option">Projects</Link>
                <Link to="/my_projects" className="option">My Projects</Link>
                <span
                    className="option-user"
                    onClick={() => setUser("1")}
                >
                    user 1
                </span>
                <span
                    className="option-user"
                    onClick={() => setUser("2")}
                    >
                    user 2
                </span>
                <span
                    className="option-user"
                    onClick={() => setUser("3")}
                >
                    user 3
                </span>
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