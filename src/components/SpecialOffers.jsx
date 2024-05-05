import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import dish1 from "../assets/images/o1.jpg";
import dish2 from "../assets/images/o2.jpg";

export default function SpecialOffers() {
  return (
    <div className="flex flex-row gap-5 mt-20  w-full px-20">
      <div className="w-4/5 h-2/9 flex  gap-4 border-2 border-black rounded-xl bg-slate-800 text-white  ">
        <img
          src={dish1}
          alt="dish-1"
          className="w-[165px] h-[165px] m-2 border-4 border-yellow-500 rounded-full "
        />
        <div className="mt-2 flex flex-col">
          <h3 className="font-dancing font-bold text-3xl">Tasty Thursdays</h3>
          <h4 className="font-dancing font-bold ">
            <span className="text-3xl">20%</span> Off
          </h4>
          <button className="w-40 h-11 border-1 rounded-3xl bg-amber-400 text-white   hover:bg-amber-500 mt-3">
            <div className="flex gap-2 items-center justify-center">
              Order Now <FaShoppingCart className="" />
            </div>
          </button>
        </div>
      </div>

      <div className="w-4/5 h-3/5 flex gap-4 border-2 border-black rounded-xl bg-slate-800 text-white">
        <img
          src={dish2}
          alt="dish-2"
          className="w-[165px] h-[165px] m-2 border-4 border-yellow-500 rounded-full"
        />{" "}
        <div className="mt-3  flex flex-col ">
          <h3 className="font-dancing font-bold text-3xl">Pizza Days</h3>
          <h4 className="font-dancing font-bold ">
            <span className="text-3xl">15%</span> Off
          </h4>
          <button className="w-40 h-11 border-1 rounded-3xl bg-amber-400 text-white   hover:bg-amber-500 mt-3">
            <div className="flex gap-2 items-center justify-center">
              Order Now <FaShoppingCart className="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
