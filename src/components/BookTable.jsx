import React from "react";

export const BookTable = () => {
  return (
    <div className="BookTable ml-20 mt-10 grid grid-cols-2">
      <div className="ml-6 mr-10">
        <h3 className="font-dancing font-bold text-4xl my-8">Book A Table</h3>
        <form className="flex flex-col gap-8 ">
          <input
            type="text"
            placeholder="Your Name"
            className="w-3/15 h-10 border-2 border-black text-black rounded-lg pl-5"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="w-3/15 h-10 border-2 border-black text-black rounded-lg pl-5"
          />
          <input
            type="email"
            placeholder="Phone Email"
            className="w-3/15 h-10 border-2 border-black text-black rounded-lg pl-5"
          />
          <select
            name="number"
            id="number-select"
            className="w-3/15 h-10 border-2 border-black rounded-lg pl-5 "
          >
            <option value="">How many persons?</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input
            type="date"
            name="date"
            className="w-3/15 h-10 border-2 border-black rounded-lg pl-5 pr-2"
          />
        </form>
      </div>

      <div>
        <div className="relative w-1/2 h-4/5 top-20 left-5">
          <iframe
            className="absolute  w-50vw h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
      <button className="w-44 h-11 border-1 rounded-3xl bg-amber-400 text-white  mt-10 ml-6 hover:bg-amber-500">
        Book Now
      </button>
    </div>
  );
};
