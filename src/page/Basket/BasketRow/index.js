import React from "react";
import { FaTrash } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useDispatch } from "react-redux";
import {
  ADD_TO_BASKET,
  DECREASE_QUANTITY,
  DELETE_FROM_BASKET,
} from "../../../store/ActionTypes";
import ModalImage from "./ModalImage";

const BasketRow = ({ el }) => {
  const dispatch = useDispatch();
  const addToBasket = () => {
    dispatch({ type: ADD_TO_BASKET, payload: el });
  };
  const deleteFromBasket = () => {
    dispatch({ type: DELETE_FROM_BASKET, payload: el.id });
  };

  const decreaseQuantity = () => {
    dispatch({ type: DECREASE_QUANTITY, payload: el });
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {el.title}
      </th>
      <td className="px-6 py-4">
         <ModalImage el={el}/>
      </td>
      <span className="flex items-center pt-6">
        <CiCircleMinus
          onClick={decreaseQuantity}
          className={`text-[24px] ${el.quantity !== 1 && "text-blue-500"}`}
        />
        <td className="text-[22px] px-6 py-4">{el.quantity}</td>
        <CiCirclePlus
          onClick={addToBasket}
          className="text-[24px] text-blue-500 "
        />
      </span>
      <td className="px-6 py-4">{el.price * el.quantity}</td>
      <td>
        <FaTrash
          onClick={deleteFromBasket}
          className="text-[18px] cursor-pointer"
        />
      </td>
    </tr>
  );
};

export default BasketRow;
