import React from 'react';
import { AdvantureItem } from './AdvantureItem';
import Style from './Advanture.module.css'

export const Advanture = () => {
    return (
      
        < div className={Style.mainContainer} >
            <div>

        <AdvantureItem pic = 'https://apps-on-mac.com/wp-content/uploads/2021/12/naraka-bladepoint.png'  title = 'NARAKA: BLADEPOINT'  des = 'A battle royale for fighting game fans powered by parkour with an array of ranged and melee weapons to choose from!' price='₹1,199'/>
            </div>
            <div>

        <AdvantureItem pic = 'https://cdn.2kgames.com/web/rw6kjyrbte/wonderlands_metaimage.jpeg'  title = "Tiny Tina's Wonderlands"  des = 'Embark on an epic adventure full of whimsy, wonder, and high-powered weaponry! Wishlist to stay up-to-date!' price='₹3,200'/>
            </div>
            <div>
        <AdvantureItem pic = 'https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/6609d2e1-62d9-4094-9cb7-26d9a7f5ba3f_2560x1440-071db7b0d39d5635f684940c1e3c4ec3?h=270&resize=1&w=480'  title = "Rocket League"  des = 'BMW speeds into Rocket League for the first time with the fully customizable M240i!' price='FREE'/>

            </div>
        </div >

  )
};
