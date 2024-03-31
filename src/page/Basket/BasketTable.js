import React from "react";
import { useSelector } from "react-redux";
import BasketRow from "./BasketRow";

const BasketTable = () => {
    const {basket} = useSelector(s => s)
  return (
    <div class="relative overflow-x-auto rounded">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Product name
            </th>
            <th scope="col" class="px-6 py-3">
              img
            </th>
            <th scope="col" class="px-6 py-3">
              quantity
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            basket.map(el => <BasketRow el={el} key={el.id}/>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default BasketTable;
