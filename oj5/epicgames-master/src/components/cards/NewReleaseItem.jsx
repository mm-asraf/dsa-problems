import React from 'react';
import Style from './NewRelease.module.css';

export const NewReleaseItem = ({pic,title,descount,oldPrice,price}) => {
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
                    <p>{descount}</p>
                    <p>{oldPrice}</p>
                    <p>{ price}</p>
                </div>
            </div>

        </div>
    )
};
