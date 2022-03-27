import React from 'react';
import Style from './Cart.module.css'

export const CartItem = ({logo,title,desPers,desRupe,price}) => {
    return (
        < div className={Style.slider} >
            <div className={Style.pic}>
                <img src={logo} alt="logo" />
            </div>
            <div className={Style.title}>
                <p>{title }</p>
            </div>
            <div className={Style.dec}>
                <p>{ desPers}</p>
                <p>{ desRupe}</p>
                <p>{ price}</p>

            </div>

        </div >

  )
};
