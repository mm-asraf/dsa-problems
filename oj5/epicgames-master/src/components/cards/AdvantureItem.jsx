import React from 'react';
import Style from './Advanture.module.css'

export const AdvantureItem = ({pic,title,des,price}) => {
    return(
        <div>
            <div className={Style.container}>
                <img src={pic} alt="Logo" />
                <p>{title}</p>
                <p>{des}</p>
                <p>{ price}</p>

            </div>

        </div>

    )
      
};
