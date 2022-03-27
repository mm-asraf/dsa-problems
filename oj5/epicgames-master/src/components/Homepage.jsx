import React from 'react';
import { Navbar } from './Navbar';
import './Homepage.css'
import { Navbar2 } from './Navbar2';
import { Game } from './carousels/Game';
import { Cart } from './carousels/Cart';
import { Advanture } from './cards/Advanture';
import { FreeGames } from './cards/FreeGames';
import { MultiCart } from './cards/MultiCart';
import { NewUpdate } from './cards/NewUpdate';
import { NewUpdate2 } from './cards/NewUpdate2';
import { Footer } from './footer/Footer';

export const Homepage = () => {
  return <div className='container'>
    <Navbar />
    <Navbar2 />
    <Game />
    <Cart />
    <Advanture />
    <FreeGames />
    <MultiCart />
    <NewUpdate />
    <Cart />
    <NewUpdate2 />
    <Cart />
    <Footer/>
    
  </div>;
};
