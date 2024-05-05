import React from "react";
import Slider from "react-slick";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      className="image  bg-cover h-screen w-full
    bg-[url('./assets/images/hero-bg.jpg')] bg-no-repeat "
    >
      <nav className="nav flex pt-5 justify-center items-center text-white  ">
        <h2 className="nav-title font-dancing font-bold text-4xl ml-[-36px] mr-28">
          Feane
        </h2>
        <div className="nav-menus flex  justify-center items-center space-x-3 ml-[200px]    ">
          <a href="/" className="xl:pl-7 ">
            HOME
          </a>
          <a href="#menu" className="xl:pl-7 ">
            MENU
          </a>
          <a href="#about" className="xl:pl-7 ">
            ABOUT
          </a>
          <a href="#book-table" className=" xl: pl-9 pr-20  ">
            BOOK TABLE
          </a>
        </div>
        <div className="nav-right flex justify-between  items-center ml-22 ">
          <IoPersonSharp className="ml-4" />
          <FaCartShopping className="ml-5" />
          <FaSearch className="ml-5" />
          <button className="flex   border-transparent rounded-full ml-6 w-36 h-10   justify-center items-center  text bg-amber-400 ">
            Order Online
          </button>
        </div>
        {/* <div className="nav-toggle flex   ">
          <GiHamburgerMenu />
          <RxCross1 />
        </div> */}
      </nav>

      <Slider
        {...settings}
        className=" slider mt-[190px]  ml-48 mr-[800px]  text-white"
      >
        <div className="">
          <h1 className="font-dancing text-6xl font-bold">
            Fast Food Restaurant
          </h1>
          <p className="pt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            aliquam repellat molestias officia? Sed vel quas aliquam ullam ab
            tenetur magni porro ad nam. Facere assumenda temporibus magni ad
            totam?
          </p>
          <button className="flex  ml-8 mt-5 border-transparent rounded-full w-36 h-10   justify-center items-center  text bg-amber-400 ">
            Order Now
          </button>
        </div>

        <div>
          <h1 className="font-dancing text-6xl font-bold">
            Fast Food Restaurant
          </h1>
          <p className="pt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            aliquam repellat molestias officia? Sed vel quas aliquam ullam ab
            tenetur magni porro ad nam. Facere assumenda temporibus magni ad
            totam?
          </p>
          <button className="flex  ml-8 border-transparent rounded-full w-36 h-10   justify-center items-center  text bg-amber-400 ">
            Order Now
          </button>
        </div>

        <div>
          <h1 className="font-dancing text-6xl font-bold">
            Fast Food Restaurant
          </h1>
          <p className="pt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            aliquam repellat molestias officia? Sed vel quas aliquam ullam ab
            tenetur magni porro ad nam. Facere assumenda temporibus magni ad
            totam?
          </p>
          <button className="flex  ml-8 border-transparent rounded-full w-36 h-10   justify-center items-center  text bg-amber-400 ">
            Order Now
          </button>
        </div>
      </Slider>
    </div>
  );
}
