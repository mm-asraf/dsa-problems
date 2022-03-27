import React from 'react';
import Style from './FreeGames.module.css'

export const FreeGamesItem = ({pic,title,des,schedule,color}) => {
    return (
        <div className={Style.cart}> 
            <div className={Style.top}>
                <img src={pic} alt="Logo" />
                <p style={{"background":`${color}`,'width':'550px','marginTop':'-40px'}}>{ schedule}</p>
            </div>
            <div className={Style.bottom}>
                <p>{title}</p>
                <p>{ des}</p>
            </div>

            
            
      </div>
  )
};
