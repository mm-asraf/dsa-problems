import React from 'react';
import { BuyNow } from './BuyNow';
import { TennisManager } from './TennisManager';
import Style from './Details.module.css'

export const Details = () => {
    return(
        <div className={Style.container}>
            <TennisManager />
            <BuyNow/>

        </div>
    )
};
