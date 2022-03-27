import React from 'react';
import Style from './Footer.module.css'
import fb from '../../img/fb.png';
import youtube from '../../img/youtube.jpg'
import twitter from '../../img/Twitter.jpg'
import logo from '../../img/logo.png'
import unreal from '../../img/unreal-engin.png'
import top from '../../img/up.jpg'
export const Footer = () => {
    return (
        <div className={Style.footer}>
            <div className={Style.icon} >
                <img src={fb} alt="Facebook" />
                <img src={ twitter}alt="Twitter" />
                <img src={youtube} alt="Youtube" />
                <img src={top} alt="Top" onClick={() => {
                
                window.scrollTo(0, 0)
                    
                }}/>
            </div>
            <div>
                <p style={{'color':'gray','marginLeft':'1%'}}>Resources</p>
                <div className={Style.resources}>
                    <div>
                        <p>Support-A-Creator</p>
                        <p>Publish on Epic Games</p>
                        <p>Careers</p>
                        <p>Company</p>
                    </div>
                    <div>
                        <p>Fan Art Policy</p>
                        <p>UX Research</p>
                        <p>Store EULA</p>
                    </div>
                    <div>
                        <p>Online Services</p>
                        <p>Community Rules</p>
                        <p>Epic Newsroom</p>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div>
                <p style={{'color':'gray','marginLeft':'1%','marginTop':'2%'}}>Made by Epic Games</p>
                <div className={Style.resources}>
                    <div>
                        <p>Battle Breakers</p>
                        <p>Fortnite</p>
                        <p>Infinity Blade</p>
                        {/* <p>Company</p> */}
                    </div>
                    <div>
                        <p>Robo Recall</p>
                        <p>Shadow Complex</p>
                        <p>Unreal tournament</p>
                    </div>
                   
                    <div>
                    </div>
                </div>
            </div>
            <hr />
            <div className={Style.cp}>
                <p>© 2022, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. Non-US transactions through Epic Games International, S.à r.l.   </p>
            </div>
            <div className={Style.terms}>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Store refund Policy</p>
            </div>
            <div className={Style.termsIcon}>
                <img src={unreal} alt="Unreal engin logo" />
                <img src={logo} alt="logo" />

            </div>
        </div>
    )   
};
