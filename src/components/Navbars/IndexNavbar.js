/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-black shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-400 text-sm font-bold leading-relaxed inline-block mr-4 py-2 bg-black uppercase"
            >
              Launch
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1  border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-black" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              


              <Link
              to="/Profile"
              className="text-red-500 text-sm font-bold leading-relaxed inline-block mr-4 py-2 bg-black"
            >
              Apply
            </Link>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
