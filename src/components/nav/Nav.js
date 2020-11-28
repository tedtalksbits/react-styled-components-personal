import React from 'react';
import './Nav.css';

function Nav() {
   return (
      <div className="nav-parent">
         <div className='nav'>
            <div className="nav__logo-wrap">
               <h1 className='nav__logo'>Logo</h1>
            </div>
            <div className="nav__links">
               <a href="#" className="nav-link">Market</a>
               <a href="#" className="nav-link">Trade</a>
               <a href="#" className="nav-link">Pricing</a>
               <a href="#" className="nav-link">Download</a>
            </div>
            <a href="#" className="nav__btn-wrap">
               Log in
         </a>
            <div className="mobile-menu">
               <box-icon name='menu' color='white' size='lg'></box-icon>
            </div>

         </div>
      </div>
   )
}

export default Nav
