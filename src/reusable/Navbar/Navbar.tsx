import React from 'react'

export const Navbar = () => {
    const logo1 = require("../../assets/logo/Logo-1.png");
    // const logo2 = require("../../assets/logo/Logo-2.png");
    const favourites = require("../../assets/logo/Favourites.png");
    const cart = require("../../assets/logo/Cart.png");
  return (
    <>
    <div className="header">
        <a href="/" className="logo">
            <img src={logo1} alt="logo" />
        </a>
        
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <a 
                        href="/" 
                        className="nav__link is-active"
                    >
                        Home
                    </a>
                </li>

                <li className='nav__item'>
                <a 
                        href="/phones" 
                        className="nav__link"
                    >
                        Phones
                    </a>

                </li>
                    
                <li className='nav__item'>
                    <a 
                        href="/tablets" 
                        className="nav__link"
                    >
                        Tablets
                    </a>
                </li>

                <li className='nav__item'>
                    <a 
                        href="/accessories" 
                        className="nav__link"
                    >
                        Accessories
                    </a>
                </li>
            </ul>

                
        </nav>

        <div className="utils">
                <a href="/" className='favourites'>
                    <img src={favourites} alt="favourites" />
                </a>

                <a href="/" className='cart'>
                    <img src={cart} alt="cart" />
                </a>
        </div>
    </div>
    </>
   
  )
}
