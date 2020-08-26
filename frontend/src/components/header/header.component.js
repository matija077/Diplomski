import React from 'react';

import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCurrentUserNumber} from '../../redux/user/user.selectors';

import './header.style.scss';

function Header({setUser, currentUserNumber}) {

    return(
        <div className="header">
            <div className="options">
                <Link to="/" className="option">Home page</Link>
                <Link to="/projects" className="option">Projects</Link>
                <span
                    className={"option-user" + (currentUserNumber == 0 ? " name" : "")}
                    onClick={() => setUser("0")}
                >
                    user 1
                </span>
                <span
                    className={"option-user" + (currentUserNumber == 1 ? " name" : "")}
                    onClick={() => setUser("1")}
                    >
                    user 2
                </span>
                <span
                    className={"option-user" + (currentUserNumber == 2 ? " name" : "")}
                    onClick={() => setUser("2")}
                >
                    user 3
                </span>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUserNumber: selectCurrentUserNumber
  });


export default connect(mapStateToProps)(Header);