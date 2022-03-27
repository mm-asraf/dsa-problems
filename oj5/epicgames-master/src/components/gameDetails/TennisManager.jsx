import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import Style from './TennisManager.module.css'
import youtube from '../../img/youtube.jpg'
import twitter from '../../img/Twitter.jpg'
import unreal from '../../img/unreal-engin.png'
import globe from '../../img/globe.png'
import { Footer } from "../footer/Footer";


// import tennis1 from "../img/tennis1.png";
// import tennis2 from "../img/tennis2.jpg";
// import tennis3 from "../img/tennis3.jpg";
// import tennis4 from "../img/tennis4.jpg";
// import tennis5 from "../img/tennis5.jpg";
// import tennis6 from "../img/tennis6.jpg";
const tennis1 = 'https://play-lh.googleusercontent.com/sTLybz4YDbvnAYNWU9M2LjAMP8dYW-uV5JxKD4EBz1REl4AY_MRmqyeP-J6uT2yIA5Y';
const tennis2 = 'https://gamefabrique.com/storage/screenshots/pc/tennis-elbow-manager-2-04.png';
const tennis3 = 'https://is5-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/7e/16/61/7e16612a-520d-8838-b4ce-ac99296481dc/b3c1072d-10f2-4232-9659-bb83f64f1e8d_Screen_5.png/800x500bb.jpg';
const tennis4 = 'https://media.cdnandroid.com/5c/a2/75/0c/2e/imagen-top-seed-tennis-manager-1gal.jpg';
const tennis5 = 'https://imag.malavida.com/mvimgbig/download-fs/tennis-manager-29139-7.jpg';
const tennis6 = 'https://cellularnews.com/wp-content/uploads/2019/10/3-10-600x338.jpg';

export const TennisManager = () => {
  return (
    <div className="leftContainer">
      <h1 className={Style.ttl}>Tennis Manager</h1>
      <Carousel autoPlay width="100%" showThumbs={true} infiniteLoop>
        <div className="image">
          <img src={tennis1} alt="img1" />
        </div>
        <div className="image">
          <img src={tennis2} alt="img2" />
        </div>

        <div className="image">
          <img src={tennis3} alt="img3" />
        </div>
        <div className="image">
          <img src={tennis4} alt="img4" />
        </div>
        <div className="image">
          <img src={tennis5} alt="img5" />
        </div>
        <div className="image">
          <img src={tennis6} alt="img6" />
        </div>
      </Carousel>
      <div className={Style.des1}>
        <p>
          Do you have what it takes to become the greatest tennis manager? Enter
          your academy, manage your team, schedule your tournaments, change your
          game plans and find out the new young guns. Take the reins, make the
          right decisions, become the best one!
        </p>
        <div className={Style.des2}> 
          <div>
            <p>Genres</p>
            <p>Simulation</p>
          </div>
          <div>
            <p>Features</p>
            <p>-</p>
          </div>
        </div>
        <div className={Style.des3}>
          <p>BECOME THE GREATEST TENNIS MANAGER!</p>
          <p>
            The rise of tennis academies has started. Their development is on
            the brink of offering thousands of promising players the chance to
            grow to the top of the tennis world. Yet, everything remains to be
            done. As a manager, it is your opportunity to develop your academy
            and bring the best out of your players. From local tournaments all
            the way up to Grand Slams, the future of tennis champions lies in
            your hands. Are you up for the challenge?
          </p>
          <p>GAMEPLAY FEATURES</p>
          <p>Enter the Tennis World</p>
          <p>
            Take on tennis tours with over 2000 tournaments. Live true-to-life
            management experiences in a dynamic Tennis World: coming from junior
            and pro circuits, over 5000 players are eager to walk on the road to
            success with their new manager.
          </p>
          <p>Grow your academy</p>
          <p>
            Enter the academy of your choice, or create your own from scratch.
            Tennis courts, medical facilities, business centers or your own
            tennis school: you will be able to build all of these to make your
            academy shine and become renowned worldwide. While costly, upgrading
            your academy's infrastructure will allow you to hire more staff,
            increase business opportunities, and attract talented players.
                  </p>
                
              </div>
              <div className={Style.btn}>

              <button >SHOW MORE</button>
              </div>

              <div className={Style.social}>
                  <p>Follow Us</p>
                  <div>
                      <img src={youtube} alt="youtube" />
                      <img src={twitter} alt="twitter" />
                      <img src={unreal} alt="unreal" />
                      <img src={globe} alt="Globe" />
                  </div>
              </div>
              
          </div>
          <Footer/>
    </div>
  );
};
