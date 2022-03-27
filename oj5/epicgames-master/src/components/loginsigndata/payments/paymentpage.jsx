import "../payments/payments.css";
import { Link } from "react-router-dom";
export const Payment = () => {
  const function1 = () => {
    // alert("scucces");
  };
  return (
    <main>
      <h2 id="credit">CREDIT/DEBIT/ATM CARD</h2>
      <input type="text" id="cardnumber" placeholder="Enter Card Number" />
      <h5 id="valid">valid thru</h5>
      <div className="card">
        <input id="month" placeholder="Month"></input>
        <input id="year" placeholder="Year"></input>
        <input id="cvv" placeholder="CVV"></input>
      </div>

      <Link to="/">
        <button onClick={function1()} id="pay">
          PAY
        </button>
      </Link>

      <h4 id="output"></h4>
    </main>
  );
};
