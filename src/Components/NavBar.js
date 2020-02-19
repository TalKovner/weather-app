import React from 'react';
import '../style/NavBar.css'

function NavBar() {
    return (
        <div className="navbar">
            <i className="material-icons" id="menu-icon">menu</i>
            {new Date().toDateString()}
        </div>
    )
}

export default NavBar;