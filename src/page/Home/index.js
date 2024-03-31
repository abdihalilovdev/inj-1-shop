import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducs } from "./data";
import {
  ADD_TO_BASKET,
  ActionTypes,
  GET_PRODUCTS,
} from "../../store/ActionTypes";
import ProductCard from "./ProductCard";

const Home = () => {
  const { products } = useSelector((s) => s);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_PRODUCTS, payload: allProducs });
  }, []);


  return (
    <div className="container pt-24">
      <div className="flex flex-row flex-wrap justify-between">
        {products.map(el => <ProductCard key={el.id} el={el}/>)}
      </div>
    </div>
  );
};

export default Home;
