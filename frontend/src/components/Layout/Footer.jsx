import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineX,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  return (
    <div className="bg-[#3AAFA9] text-black">
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-10 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src="https://b2bazar-bucket.s3.us-west-2.amazonaws.com/logoname.png"
            alt=""
          />
          <br />
          <p>Discover top-quality wholesale products at B2Bazar. Join today to connect with trusted suppliers and secure the best deals!</p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineX
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-[#FEFFFF] hover:text-[#17252A] duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-[#FEFFFF] hover:text-[#17252A] duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-[#FEFFFF] hover:text-[#17252A] duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="text-center pt-2 text-[#FEFFFF] text-md pb-8"
      >
        <span>© 2024 B2Bazar · All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
