import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <h1>Header</h1>
            <div className="header__left">
                <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/LinkedinBlack.png/640px-LinkedinBlack.png" alt="Linkedin"/>
                <div className="header__search">
                    {/* icon */}
                    <input type="text"/>
                </div>
            </div>
            <div className="header__right">

            </div>

        </div>
    )
}

export default Header
