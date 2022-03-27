import "../signin/signin.css";
import { Link } from "react-router-dom";
export const Signin = () => {
  return (
    <>
      <div id="container">
        <h2 id="sign">Sign In</h2>
        <h5 class="comman">NAME</h5>
        <input type="" id="name" placeholder="Enter Name" />
        <h5 class="comman">MOBILE NUMBER</h5>
        <input type="" id="mobile" placeholder="Enter Mobile Number" />

        <h5 class="comman">PASSWORD</h5>
        <input type="" id="password" placeholder="Enter Password" />

        <div>
          <Link to="/login">
            <button onclick="submit()">Submit</button>
          </Link>
        </div>
      </div>
    </>
  );
};
