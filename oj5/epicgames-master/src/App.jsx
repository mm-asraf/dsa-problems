import React from "react";
// import { Cart } from "./components/carousels/Cart";
// import { Game } from "./components/carousels/Game";
import { Details } from "./components/gameDetails/Details";
import { TennisManager } from "./components/gameDetails/TennisManager";
import { Homepage } from "./components/Homepage";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/loginsigndata/login/loginpage";
import { Signin } from "./components/loginsigndata/signin/signpage";
import { Payment } from "./components/loginsigndata/payments/paymentpage";

export const App = () => {
  return (
    <div>
      {/* <Homepage /> */}
      {/* <Payment /> */}

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<Details />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>
    </div>
  );
};
