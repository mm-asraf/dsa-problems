import React from "react";
import Style from "./BuyNow.module.css";
import tennis1 from "../../img/tennis1.png";
import windows from "../../img/window.png";
import mac from "../../img/mac.png";
import { Link } from "react-router-dom";

export const BuyNow = () => {
  return (
    <div className={Style.container}>
      <img src={tennis1} alt="Tennis Logo" className={Style.pic1} />
      <p>Base Game</p>
      <div className={Style.dis}>
        <p>-60 %</p>
        <p>₹939</p>
        <p>₹375.60</p>
      </div>
      <div>
        <p className={Style.sale}>Sale ends 1/30/2022 at 11:30 AM</p>
      </div>
      <div className={Style.btn}>
        <Link to="/signin">
          <button>BUY NOW</button>
        </Link>
        <button>ADD TO CART</button>
        <button>ADD TO WISHLIST</button>
      </div>
      <div className={Style.dev}>
        <div className={Style.dev1}>
          <p>Develoer</p>
          <p>Rebound CG</p>
        </div>
        {/* <hr /> */}
        <div className={Style.dev1}>
          <p>Publisher</p>
          <p>Rebound CG</p>
        </div>
        {/* <hr /> */}
        <div className={Style.dev1}>
          <p>Release Date</p>
          <p>05/25/21</p>
        </div>
        {/* <hr /> */}
        <div className={Style.dev2}>
          <p>Platform</p>
          <img
            style={{ height: "10%", width: "10%" }}
            src={windows}
            alt="windows logo"
          />
          <img src={mac} alt="mac logo" />
        </div>
        {/* <hr /> */}
      </div>
    </div>
  );
};
