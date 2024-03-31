import React from "react";
import { useSelector } from "react-redux";
import BasketTable from "./BasketTable";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";

const Basket = () => {
  const { basket } = useSelector((s) => s);
  console.log(basket);
  return (
    <div className="pt-32 container">
      <div className="flex items-center justify-center gap-2 pb-6">
        <h1 className="text-[28px] font-mono font-bold text-center">Basket</h1>
        <SlBasket className="text-[25px]" />
      </div>
      {basket.length > 0 ? (
        <BasketTable />
      ) : (
        <Link to={'/'}>
          <div className="py-4 px-6 font-mono font-bold text-white text-[22px] bg-amber-400 rounded w-56 flex justify-center mx-auto cursor-pointer">
            ADD PRODUCT+
          </div>
        </Link>
      )}
    </div>
  );
};

export default Basket;
