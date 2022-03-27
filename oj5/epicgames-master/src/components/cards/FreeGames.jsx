import React from 'react';
import Style from './FreeGames.module.css'
import { FreeGamesItem } from './FreeGamesItem';
import gift from '../../img/gift.png'
export const FreeGames = () => {
    return (
        <div className={Style.container}>
            <div>
                <img src={gift} alt="Gift Logo" />
                <p>Free Games</p>
                <p>VIEW MORE</p>
            </div>
            <div className={Style.main}>

            <div >

            <FreeGamesItem  pic = 'https://cdn.akamai.steamstatic.com/steam/apps/941570/header.jpg?t=1614192354' title = 'Relicta' des = 'Free Now-Jan 27 at 09:30PM' schedule = 'FREE NOW' color = 'blue'/>
            </div>
            <div>

            <FreeGamesItem  pic = 'data:image/jpeg;base64,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' title = 'DAEMON X MACHINA' des = 'Free Jan 27-Feb 03' schedule = 'COOMING SOON' color ='black' />
            </div>
            </div>

            
      </div>
  )
};