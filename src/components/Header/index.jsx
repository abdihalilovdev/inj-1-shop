import React from "react";
import LOGO from "../../img/LOGO.svg";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { basket } = useSelector((s) => s);

  return (
    <div className="bg-amber-400 py-3 fixed w-[100%]">
      <div className="container">
        <div className="flex items-center justify-between">
          <img src={LOGO} alt="img" width="70" />
          <div className="flex items-center gap-10">
            <NavLink to={"/"} className="text-[22px] font-bold text-white">
              Products
            </NavLink>
            <NavLink
              to={"/favorites"}
              className="text-[22px] font-bold text-white"
            >
              Favorites
            </NavLink>
            <NavLink
              to={"/basket"}
              className="text-[22px] font-bold text-white"
            >
              Basket
            </NavLink>
          </div>
          <select className="bg-gray-50 text-[17px] font-bold  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
            <option selected>Choose a country</option>
            <option defaultValue="US">United States</option>
            <option defaultValue="CA">Canada</option>
            <option defaultValue="FR">France</option>
            <option defaultValue="DE">Germany</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
