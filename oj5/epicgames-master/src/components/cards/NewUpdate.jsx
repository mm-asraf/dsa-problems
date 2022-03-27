import React from 'react';
import { NewUpdateItem } from './NewUpdateItem';
import Style from './NewUpdate.module.css'


export const NewUpdate = () => {
    return (
        <div className={Style.main}>
            <NewUpdateItem pic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1pY5LWRArDa9IxOgbKzIyvN31vZaJpdZNWw&usqp=CAU' title = 'Genshin Impact-New Update' des = "The latest update features Liyue's biggest festival Lantern Rite, more characters, and a new area shrouded in secret, Enkanomiya!" price = 'Free'/>
            <NewUpdateItem pic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_g-WLwEhzgArJ8_uLFMxO-FqUHinPzq_kbQ&usqp=CAU' title = 'Teamfight Tactics' des = "Explore the Teamfight Tactics Lunar Legend Festival: Gifts of the Golden Lantern event, now until Feb 14." price = 'Free'/>
        </div>
    )
};
