import React from 'react';
import Style from './NewUpdate.module.css'

export const NewUpdateItem = ({pic,title,des,price}) => {
    return (
        <div className={Style.container}>
            <div className={Style.pic}>

                <img src={pic} alt="logo" />

            </div>
            <div className={Style.des}>
                <p>{title}</p>
                <p>{des}</p>
                <p>{ price}</p>
            </div>
      
    </div>
    )
};
