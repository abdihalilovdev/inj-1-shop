import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TO_BASKET } from '../../store/ActionTypes';

const AddToBasketBtn = ({el}) => {
  const dispatch = useDispatch();

    const addToBasket = () => {
        dispatch({ type: ADD_TO_BASKET, payload: el });
      };
    return (
        <button
            onClick={addToBasket}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            добавить в корзину
          </button>
    );
};

export default AddToBasketBtn;