import React from 'react';
import { FreeGames } from './FreeGames';
import { NewRelease } from './NewRelease';
import { TopSellers } from './TopSellers';
import Style from './MultiCart.module.css'
import { CommingSoon } from './CommingSoon';

export const MultiCart = () => {
    return (
        <div className={Style.container}> 
            <div>

            <NewRelease/>
            </div>
            <div>
                <TopSellers/>
            </div>
            <div>
                {/* <FreeGames/> */}
                <CommingSoon/>
            </div>

        </div>
    )
};
