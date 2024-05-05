import React from "react";
import client1 from "../assets/images/client1.jpg";
import client2 from "../assets/images/client2.jpg";
import Slider from "react-slick";

export default function CustomerReview() {
  const sliderSettings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
  };

  return (
    <div className="w-full">
      <h2 className="font-dancing font-bold text-5xl flex  items-center justify-center mb-5">
        What Says Our Customers
      </h2>

      <div className="flex  mb-20 items-center justify-center mx-10">
        <div className="">
          <div className="w-4/5 h-3/5 border-2  rounded-3xl bg-slate-900 text-white p-8 m-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium itaque aut corporis dicta, quaerat corrupti id atque
              optio quae minima libero rerum recusandae delectus quasi
              reiciendis possimus numquam? Beatae, corporis.
            </p>
            <h6 className="font-semibold italic  my-2">Moana Michell</h6>
            <p>magna aliqua</p>
          </div>
          <img
            src={client1}
            alt="client1-photo"
            className="w-[150px] h-[150px] border-4 border-yellow-500 rounded-full ml-5"
          />
        </div>

        <div>
          <div className="w-4/5 h-3/5 border-2 rounded-3xl bg-slate-900 text-white  p-8 m-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium itaque aut corporis dicta, quaerat corrupti id atque
              optio quae minima libero rerum recusandae delectus quasi
              reiciendis possimus numquam? Beatae, corporis.
            </p>
            <h6 className="font-semibold italic  my-2">Mike Hamell</h6>
            <p>magna aliqua</p>
          </div>
          <img
            src={client2}
            alt="client2-photo"
            className="w-[150px] h-[150px] border-4 border-yellow-500 rounded-full ml-5"
          />
        </div>
      </div>
    </div>
  );
}
