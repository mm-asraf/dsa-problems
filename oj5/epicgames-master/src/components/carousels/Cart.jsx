import React from "react";
import Carousel from "react-elastic-carousel";
import { CartItem } from "./CartItem";
import Style from "./Cart.module.css";
import { Link } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
export const Cart = () => {
  return (
    <div className={Style.container}>
      {/* <img src="https://image.api.playstation.com/vulcan/img/rnd/202106/2908/7aJhOMuJALdBPqZHVy3CgJsg.png" alt="" /> */}
      <p className={Style.gameonSale}>Game on sale</p>
      <Carousel breakPoints={breakPoints}>
        <CartItem
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS36jEgwdWPK4JkgOc6jEQuE3TLmKlEs6LQg&usqp=CAU"
          title="Cobra kai - The Karate Kid Sag..."
          desPers="-60%"
          desRupe="₹469"
          price="₹167"
        />
        <CartItem
          logo="https://i.insider.com/5aa160f8819524f9658b4599?width=700"
          title="True Hate"
          desPers="-80%"
          desRupe="₹189"
          price="₹40"
        />
        <CartItem
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjnR4X6_6Sl1HNveaL_7kIjs7RK-JWl-TVEA&usqp=CAU"
          title="Outerverse"
          desPers="-20%"
          desRupe="₹349"
          price="₹280"
        />
        <CartItem
          logo="https://m.media-amazon.com/images/M/MV5BZGViZTE5YmItYWRlNy00NDA3LWFmMzQtODVlZDQ2YWE3NzViXkEyXkFqcGdeQXVyNjE1MzI4MjM@._V1_FMjpg_UX1000_.jpg"
          title="Strategic Mind : Fight for Freed..."
          desPers="-25%"
          desRupe="₹1099"
          price="825₹"
        />
        <CartItem
          logo="https://cdn.cloudflare.steamstatic.com/steam/apps/1281790/capsule_616x353.jpg?t=1598469278"
          title="Sheepo"
          desPers="-30%"
          desRupe="₹239"
          price="₹168"
        />
        <CartItem
          logo="https://store-images.s-microsoft.com/image/apps.55408.14545000756331709.fe0b8e3c-108f-4f54-a7d0-a2b1eded6bbe.2abeca5b-76da-4bfc-bc70-2ae271f37541?q=90&w=177&h=265"
          title="Pupperazzi"
          desPers="-10%"
          desRupe="₹469"
          price="₹422"
        />
        <CartItem
          logo="https://i2.wp.com/i114.fastpic.ru/big/2021/0612/de/a68ca9cfeb124d8d60843abec78a0ede.png?resize=340%2C440&ssl=1"
          title="Fathfinder:Kingmaker- Enhan..."
          desPers="-55%"
          desRupe="₹529"
          price="₹240"
        />
        <Link to="/about">
          <CartItem
            logo="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TennisManager2021_ReboundCG_S4_1200x1600-28b043727bc4e59d9e3a277c4d942801"
            title="Tennis Manager"
            desPers="-60%"
            desRupe="₹939"
            price="₹375"
          />
        </Link>
      </Carousel>
    </div>
  );
};
