import {
  ADD_TO_BASKET,
  ADD_TO_FAVORITE,
  DECREASE_QUANTITY,
  DELETE_FROM_BASKET,
  GET_PRODUCTS,
} from "../ActionTypes";

const initialStete = {
  products: [],
  favorites: [],
  basket: [],
};

export const Reducer = (state = initialStete, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return { ...state, products: action.payload };
    }
    case ADD_TO_BASKET: {
      const found = state.basket.find((p) => p.id === action.payload.id);
      if (found) {
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === action.payload.id
              ? { ...el, quantity: el.quantity + 1 }
              : el
          ),
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case DELETE_FROM_BASKET: {
      return {
        ...state,
        basket: state.basket.filter((el) => el.id !== action.payload),
      };
    }

    case DECREASE_QUANTITY: {
      return {
        ...state,
        basket: state.basket.map((el) =>
          el.id === action.payload.id && el.quantity > 1
            ? { ...el, quantity: el.quantity - 1 }
            : el
        ),
      };
    }

    case ADD_TO_FAVORITE: {
      const _id = action.payload.id;
      const found = state.favorites.some((el) => el.id === _id);
      if (!found) {
        return { ...state, favorites: [...state.favorites, action.payload] };
      }
      return {
        ...state,
        favorites: state.favorites.filter((f) => f.id !== _id),
      };
    }
    default: {
      return state;
    }
  }
};
