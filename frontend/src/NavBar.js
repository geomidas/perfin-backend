import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/salary">Salary</Link>
      </li>
      <li>
        <Link to="/plan">Plan</Link>
      </li>
      <li>
        <Link to="/spending">Spending</Link>
      </li>
      <li>
        <Link to="/debt">Debt</Link>
      </li>
      <li>
        <Link to="/investments">Investments</Link>
      </li>
      <li>
        <Link to="/assets">Assets</Link>
      </li>
      <li>
        <Link to="/fi">FI</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
