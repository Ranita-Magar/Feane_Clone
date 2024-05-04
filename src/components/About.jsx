import React from "react";
import AboutImg from "../assets/images/about-img.png";

export const About = () => {
  return (
    <div className="about h-svh w-svw relative">
      <div
        className="about-content absolute  flex 
     items-center justify-center bg-slate-900 text-white gap-6 h-svh  "
      >
        <img src={AboutImg} alt="about-img" className="w-80  " />

        <div className="about-details flex flex-col gap-6 w-2/5">
          <h3 className="text-5xl font-bold">We Are Feane</h3>
          <p className="text-l">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            nihil sequi ducimus doloremque tenetur exercitationem maxime amet
            nobis voluptatum nesciunt earum, ullam, eveniet repudiandae quaerat
            repellendus omnis iste tempore. Laboriosam.
          </p>
          <button className="w-40 h-11 border-1 rounded-3xl bg-amber-400 text-white mr-[-900px] mt-5 hover:bg-amber-500">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
