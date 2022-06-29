import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const mymenus = (
    <>
      <li>
        <span>Paid Total: 0</span>
      </li>
      <li>
        <Link to="/login">
          Login
          <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </Link>
      </li>
    </>
  );
  return (
    <div class="navbar bg-gray-400 text-white justify-between">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {mymenus}
          </ul>
        </div>
        <h2 class="text-xl text-primary font-bold">Billing Calculator</h2>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{mymenus}</ul>
      </div>
    </div>
  );
};

export default Header;
