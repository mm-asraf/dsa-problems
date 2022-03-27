import React from 'react';
import Style from './TopSellers.module.css'

export const TopSellersItem = ({pic,title,price}) => {
    return (
        <div className={Style.container}>
            <div className={Style.pic}>
                <img src={pic} alt="logo" />
            </div>
            <div className={Style.bottom}>
                <div  className={Style.title}>
                    <p>{ title}</p>
                </div>
                <div className={Style.amount}>
                    <p>{price}</p>
                   
                </div>
            </div>

        </div>
  )
};
