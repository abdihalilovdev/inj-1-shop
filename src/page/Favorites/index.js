import React from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const { favorites } = useSelector((s) => s);

  return (
    <div className="container">
      <div className="pt-32">
        <ul className="rounded mx-auto w-[550px]">
          {favorites.map((el) => (
            <li className="font-mono text-xl w-full border rounded hover:shadow-md py-2 px-4 cursor-pointer my-2">
              {el.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Favorites;
