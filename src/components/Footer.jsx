import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationPin,
  FaPhone,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";
import { IoLogoTwitter, IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <div className=" h-[400px] bg-slate-800 text-white ">
      <div className="grid grid-cols-3 gap-6  justify-between ">
        <div className="ml-80">
          <h3 className="font-dancing font-bold text-3xl mt-10 mb-5 ">
            Contact Us
          </h3>
          <p className="flex items-center gap-2">
            <FaLocationPin /> Location
          </p>
          <p className="flex items-center gap-2">
            <FaPhone /> Call +01 1234567890
          </p>
          <p className="flex items-center gap-2">
            <IoMail /> demo@gmail.com
          </p>
        </div>

        <div>
          <h3 className="font-dancing font-bold text-3xl mt-10 mb-5 text-center">
            Feane
          </h3>
          <p className="mx-6">
            Necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with
          </p>
          <div className="flex items-center justify-center my-2 gap-1 cursor-pointer ">
            <FaFacebook className="hover:text-yellow-400" />
            <FaTwitter className="hover:text-yellow-400" />
            <FaLinkedin className="hover:text-yellow-400" />
            <FaInstagram className="hover:text-yellow-400" />
            <FaPinterest className="hover:text-yellow-400" />{" "}
          </div>
        </div>

        <div className="ml-5">
          <h3 className="font-dancing font-bold text-3xl mt-10 mb-5 ">
            Opening Hours
          </h3>
          <p className="ml-12 mb-5">Everyday</p>
          <p>10.00 Am - 10.00 Pm</p>
        </div>
      </div>

      <div className="grid grid-rows-2 gap-4 mt-10 items-center justify-center">
        <p>© All Rights Reserved By Free Html Templates</p>
        <p>© Distributed By ThemeWagon</p>
      </div>
    </div>
  );
}
