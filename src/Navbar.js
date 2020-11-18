import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div class='nav-wrapper'>
        <a href='#' class='brand-logo'>
          Hooks
        </a>
        <ul id='nav-mobile' class='right '>
          <li>
            <Link to='/useState'> UseState </Link>
          </li>
          <li>
            <Link to='/useRef'> UseRef </Link>
          </li>
          <li>
            <Link to='/useEffect'> UseEffect </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
