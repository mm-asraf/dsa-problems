import React from 'react';
import {Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Game.css';

export const Game = () => {
    return (
        <div className='gameContainer'>
            <Carousel  width="100%" showThumbs={true} infiniteLoop>
                <div className='image'>
                    <img src="https://i.pinimg.com/originals/ee/b7/7e/eeb77eb4033f368777e6869c450be3f7.jpg" alt="Game Of War" />
                    <div className='legend'>

                    <p >Out Now</p>

                        <p>Venture into the brutal Norse  realms and </p>
                        <p>fight to fulfill a deeply personal quest</p>
                    <p>Starting at ₹3,299</p>
                    <button>Buy Now</button>
                    <button>Add to cart</button>
                    </div>

                </div>
                <div className='image'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Dying_Light_2.jpg" alt="Dying Light2" />
                    <div className='legend dying'>
                        <p>COMMING FEBRUARY 4</p>
                        <p>Parkour through a post-apocalyptic</p>
                        <p>city and look for allies in Dying Light 2</p>
                        <p>Stay Human ! Whishlist now!</p>
                        {/* <p>Starting </p> */}
                        <p>Starting at ₹2,299</p>
                        <button>WISHLIST NOW</button>
                        <button>ADD TO WISHLIST</button>



                    </div>


                </div>
                <div className='image'>
                    <img src="https://lordsofgaming.net/wp-content/uploads/2015/12/Tom-Clancys-Rainbow-Six-Extraction.png" alt="Rainbow Wxtraction" />
                            <div className='legend rainbow'>
                        <p>Out</p>
                        <p>Team Rainbow  now faces the greatest</p>
                        <p>terror ever: a lethal,mutating alien invasion</p>
                        <p>Starting at ₹1,999 </p>
                        <button>Buy Now</button>
                        <button>Add to Wishlist</button>

                    </div>


                </div>
                <div className='image '>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a6b8fa115544425.6148a509ca305.png" alt="Fort Night" />
                    <div className='legend fortnite'>
                        <p>OUT NOW</p>
                        <p>The  two Hawkeyes:Clint Barton and</p>
                        <p>Kate Bishop take aim in Fortnite</p>
                        <button>BUY NOW</button>

                    </div>



                </div>
                <div className='image'>
                    <img src="https://cdn.mos.cms.futurecdn.net/NpccPc22bNp7wNENn8T9fd.png" alt="Sifu" />
                      <div className='legend sifu'>
                        <p>COMMINF FEBRUARY 8</p>
                        <p>Pre-purchase available now, with</p>
                        <p>exclusive content and pre-launch early</p>
                        <p>access</p>
                        <p>Starting at ₹939 </p>

                         <button>PRE-PURCHASE NOW</button>
                        <button>Add to Wishlist</button>


                    </div>


                </div>
                <div className='image '>
                    <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/final-fantasy-vii-remake/3/31/Final_Fantasy_VII_Remake_-_Walkthrough_-_Chapter_14_-_1.png" alt="Final fantasy" />
                       <div className='legend fantasy'>
                        <p>EPIC GAMES STORE PC EXCLUSIVE</p>
                        <p>The timeless classic FINAL FANTASY</p>
                        <p>VII REMAKE INTERGRADE is rebourn</p>
                        <p>with a new battle system,upgraded</p>
                        <p>graphics,andadditional adventure</p>
                        <p>Starting at ₹4,799 </p>

                         <button>BUY NOW</button>
                        <button>Add to Wishlist</button>


                    </div>


                </div>
                {/* <div className='image'>
                    <img src="" alt="" />


                </div> */}
            </Carousel>
        </div>
    )
      

};
