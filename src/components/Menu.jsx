import React from "react";
import { Navbar } from "./Navbar";
import food1 from "../assets/images/f1.png";
import food2 from "../assets/images/f2.png";
import food3 from "../assets/images/f3.png";
import food4 from "../assets/images/f4.png";
import food5 from "../assets/images/f5.png";
import food6 from "../assets/images/f6.png";
import food7 from "../assets/images/f7.png";
import food8 from "../assets/images/f8.png";
import food9 from "../assets/images/f9.png";
import {  FaShoppingCart } from "react-icons/fa";

export default function Menu() {
  return (
    <div className="menu mb-20">
      {/* <Navbar /> */}
      <h1 className="font-dancing font-bold text-4xl menu-title pt-24 pb-8 text-center ">
        Our Menu
      </h1>
      <ul className="menu-options flex  items-center justify-center text-center gap-10 mb-10 ">
        <li className="w-[70px] h-10 pt-1 bg-black text-white rounded-full">
          All
        </li>
        <li className="w-[70px] h-10 pt-1 bg-black text-white rounded-full">
          Burger
        </li>
        <li className="w-[70px] h-10 pt-1 bg-black text-white rounded-full">
          Pizza
        </li>
        <li className="w-[70px] h-10 pt-1 bg-black text-white rounded-full">
          Pasta
        </li>
        <li className="w-[70px] h-10 pt-1 bg-black text-white rounded-full">
          Fries
        </li>
      </ul>

      <div className="menu-options grid grid-cols-3 gap-10 ml-20">
        <div className=" ml-5 w-[352px] h-[450px] border-2 rounded-3xl  border-black  ">
          <div className="  w-[350px] h-[225px]   border-black ml-12 ">
            <img
              src={food1}
              className="w-3/5 ml-5 mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
            />{" "}
          </div>

          <div className="w-[350px] h-[205px] border-2 rounded-b-3xl  border-black bg-black text-white pl-6">
            <h5 className="font-bold italic text-xl mb-2">Delicious pizza</h5>
            <p>
              Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
              velit, magnam voluptatem repellendus sed eaque
            </p>
            <div className="flex items-center mt-8">
              <p>$20</p>
              <p className="w-8 h-8 border-2 rounded-full m-auto flex    items-center justify-center bg-amber-400 ">
                <FaShoppingCart className="cursor-pointer" />{" "}
              </p>
            </div>
          </div>
        </div>

        <div className=" ml-5 w-[352px] h-[450px] border-2 rounded-3xl  border-black  ">
          <div className="  w-[350px] h-[225px]   border-black ml-12 ">
            <img
              src={food2}
              className="w-3/5 ml-5 mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            />{" "}
          </div>
          <div className="w-[350px] h-[205px] border-2 rounded-b-3xl  border-black bg-black text-white pl-6">
            <h3 className="font-bold italic text-xl mb-2">Delicious Burger</h3>
            <p>
              Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
              velit, magnam voluptatem repellendus sed eaque
            </p>
            <div className="flex items-center mt-8">
              <p>$15</p>
              <p className="w-8 h-8 border-2 rounded-full m-auto flex    items-center justify-center bg-amber-400 ">
                <FaShoppingCart className="cursor-pointer" />{" "}
              </p>
            </div>
          </div>
        </div>

        <div className=" ml-5 w-[352px] h-[450px] border-2 rounded-3xl  border-black  ">
          <div className="  w-[350px] h-[225px] ml-12  border-black  ">
            <img
              src={food3}
              className="w-3/5 ml-5 mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            />{" "}
          </div>
          <div className="w-[350px] h-[205px] border-2 rounded-b-3xl  border-black bg-black text-white pl-6">
            <h3 className="font-bold italic text-xl mb-2">Delicious Pizza</h3>
            <p>
              Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
              velit, magnam voluptatem repellendus sed eaque
            </p>
            <div className="flex items-center mt-8">
              <p>$17</p>
              <p className="w-8 h-8 border-2 rounded-full m-auto flex    items-center justify-center bg-amber-400 ">
                <FaShoppingCart className="cursor-pointer" />{" "}
              </p>
            </div>
          </div>
        </div>

        <div className=" ml-5 w-[352px] h-[450px] border-2 rounded-3xl  border-black  ">
          <div className="  w-[350px] h-[225px] ml-12  border-black  ">
            <img
              src={food4}
              className="w-3/5 ml-5 mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            />{" "}
          </div>
          <div className="w-[350px] h-[205px] border-2 rounded-b-3xl  border-black bg-black text-white pl-6">
            <h3 className="font-bold italic text-xl mb-2">Delicious Pasta</h3>
            <p>
              Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
              velit, magnam voluptatem repellendus sed eaque
            </p>
            <div className="flex items-center mt-8">
              <p>$18</p>
              <p className="w-8 h-8 border-2 rounded-full m-auto flex    items-center justify-center bg-amber-400 ">
                <FaShoppingCart className="cursor-pointer" />{" "}
              </p>
            </div>
          </div>
        </div>

        <div className=" ml-5 w-[352px] h-[450px] border-2 rounded-3xl  border-black  ">
          <div className="  w-[350px] h-[225px] ml-12  border-black  ">
            <img
              src={food5}
              className="w-3/5 ml-5 mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            />{" "}
          </div>
          <div className="w-[350px] h-[205px] border-2 rounded-b-3xl  border-black bg-black text-white pl-6">
            <h3 className="font-bold italic text-xl mb-2">French Fries</h3>
            <p>
              Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
              velit, magnam voluptatem repellendus sed eaque
            </p>
            <div className="flex items-center mt-8">
              <p>$10</p>
              <p className="w-8 h-8 border-2 rounded-full m-auto flex    items-center justify-center bg-amber-400 ">
                <FaShoppingCart className="cursor-pointer" />{" "}
              </p>
            </div>
          </div>
        </div>

        <div className=" ml-5 w-[352px] h-[450px] border-2 rounded-3xl  border-black  ">
          <div className="  w-[350px] h-[225px] ml-12  border-black  ">
            <img
              src={food6}
              className="w-3/5 ml-5 mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            />{" "}
          </div>
          <div className="w-[350px] h-[205px] border-2 rounded-b-3xl  border-black bg-black text-white pl-6">
            <h3 className="font-bold italic text-xl mb-2">Delicious Pizza</h3>
            <p>
              Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
              velit, magnam voluptatem repellendus sed eaque
            </p>
            <div className="flex items-center mt-8">
              <p>$15</p>
              <p className="w-8 h-8 border-2 rounded-full m-auto flex    items-center justify-center bg-amber-400 ">
                <FaShoppingCart className="cursor-pointer" />{" "}
              </p>
            </div>
          </div>
        </div>

        <div className=" ml-5 w-[352px] h-[450px] border-2 rounded-3xl  border-black  ">
          <div className="  w-[350px] h-[225px] ml-12  border-black  ">
            <img
              src={food7}
              className="w-3/5 ml-5 mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            />{" "}
          </div>
          <div className="w-[350px] h-[205px] border-2 rounded-b-3xl  border-black bg-black text-white pl-6">
            <h3 className="font-bold italic text-xl mb-2">Tasty Burger</h3>
            <p>
              Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
              velit, magnam voluptatem repellendus sed eaque
            </p>
            <div className="flex items-center mt-8">
              <p>$12</p>
              <p className="w-8 h-8 border-2 rounded-full m-auto flex    items-center justify-center bg-amber-400 ">
                <FaShoppingCart className="cursor-pointer" />{" "}
              </p>
            </div>
          </div>
        </div>

        <div className=" ml-5 w-[352px] h-[450px] border-2 rounded-3xl  border-black  ">
          <div className="  w-[350px] h-[225px] ml-12  border-black  ">
            <img
              src={food8}
              className="w-3/5 ml-5 mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            />{" "}
          </div>
          <div className="w-[350px] h-[205px] border-2 rounded-b-3xl  border-black bg-black text-white pl-6">
            <h3 className="font-bold italic text-xl mb-2">Tasty Burger</h3>
            <p>
              Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
              velit, magnam voluptatem repellendus sed eaque
            </p>
            <div className="flex items-center mt-8">
              <p>$14</p>
              <p className="w-8 h-8 border-2 rounded-full m-auto flex    items-center justify-center bg-amber-400 ">
                <FaShoppingCart className="cursor-pointer" />{" "}
              </p>
            </div>
          </div>
        </div>

        <div className=" ml-5 w-[352px] h-[450px] border-2 rounded-3xl  border-black  ">
          <div className="  w-[350px] h-[225px] ml-12  border-black  ">
            <img
              src={food9}
              className="w-3/5 ml-5 mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            />{" "}
          </div>
          <div className="w-[350px] h-[205px] border-2 rounded-b-3xl  border-black bg-black text-white pl-6">
            <h3 className="font-bold italic text-xl mb-2">Delicious Pasta</h3>
            <p>
              Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
              velit, magnam voluptatem repellendus sed eaque
            </p>
            <div className="flex items-center mt-8">
              <p>$10</p>
              <p className="w-8 h-8 border-2 rounded-full m-auto flex    items-center justify-center bg-amber-400 ">
                <FaShoppingCart className="cursor-pointer" />{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="w-40 h-11 border-1 rounded-3xl bg-amber-400 text-white mr-[-900px] mt-5 hover:bg-amber-500">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};
