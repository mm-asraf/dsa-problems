// import React from 'react';
import Style from './Navbar.module.css'
import searchIcon from '../img/searchIcon.png'
import React, { useState, useEffect } from 'react';
import './styky.css'

export const Navbar2 = () => {
    const [stickyClass, setStickyClass] = useState('');
     useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
     }, []);
     const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };
    return <div className={`navbar ${stickyClass}`}>
        {/* <h1>Helloo SRK here</h1> */}
            <div className={Style.navBar2}>
            <div className={Style.srh}>
                <div className={Style.srhLeft}>
                    <img src={searchIcon} alt="search" />
                    <p>Search</p>
                </div>
                <div className={Style.srhRight}>
                    <p>Discover</p>
                    <p>Browse</p>
                    <p>News</p>
                </div>
            </div>
      </div>

  </div>;
};
