import React from "react";
import AddToBasketBtn from "../../../ui/AddToBasketBtn";
import NavigateToBasketBtn from "../../../ui/NavigateToBasketBtn";
import { useSelector } from "react-redux";
import AddToFavoriteBtn from "../../../ui/AddToFavoriteBtn";
const ProductCard = ({ el }) => {
  const { basket } = useSelector((s) => s);
  const found = basket.some((b) => b.id === el.id);
  return (
    <div className="w-[20%] mx-4 py-10 flex flex-col items-center">
      <img src={el.image} alt="img" />
      <p className="font-bold text-[18px]">{el.price} som</p>
      <h1 className="font-bold text-[22px] py-2">{el.title}</h1>
      <div className="flex items-center">
        {found ? <NavigateToBasketBtn /> : <AddToBasketBtn el={el} />}
        <AddToFavoriteBtn el={el}/>
      </div>
    </div>
  );
};

export default ProductCard;
