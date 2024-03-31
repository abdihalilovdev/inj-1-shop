import React from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_FAVORITE } from "../../store/ActionTypes";

const AddToFavoriteBtn = ({ el }) => {
  const dispatch = useDispatch();

  const { favorites } = useSelector((s) => s);
  const found = favorites.some((f) => f.id === el.id);

  const addToFavorite = (product) => {
    dispatch({ type: ADD_TO_FAVORITE, payload: product });
  };

  return (
    <button
      onClick={() => addToFavorite(el)}
      class={`${
        found ? "text-red-600" : "text-white"
      } text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
    >
      <FaHeart className="text-[18px]" />
    </button>
  );
};

export default AddToFavoriteBtn;
