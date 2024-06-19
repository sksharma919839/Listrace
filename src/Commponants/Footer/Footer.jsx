import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

const footerItems = [
  {
    id: 1,
    Link: "/works",
    text: "HOW IT WORKS",
  },
  {
    id: 2,
    Link: "/explore",
    text: "EXPLORE",
  },
  {
    id: 3,
    Link: "/review",
    text: "REVIEW",
  },
  {
    id: 4,
    Link: "/blog",
    text: "BLOG",
  },
  {
    id: 5,
    Link: "/contact",
    text: "CONTACT",
  },
];

const footerIcon = [
  {
    id: 1,
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    icon: <FaTwitter />,
  },
  {
    id: 3,
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    icon: <FaGooglePlusG />,
  },
];

function Footer() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <div className="md:flex items-center justify-between py-[45px] w-[90%] border-b ">
            <Link to="/Listrace">
              <span className="text-[20px] text-[#1b1e20] font-extrabold">
                List
              </span>
              <span className="text-[20px] font-extrabold text-[#ff545a]">
                Race
              </span>
            </Link>
            <ul className="md:flex items-center justify-evenly">
              {footerItems.map((items) => (
                <li className="py-[10px] md:py-0" key={items.id}>
                  <NavLink
                    className="text-[14px]  text-[#859098] px-[20px] transition-all duration-700 hover:text-[#ff545a]"
                    to={items.Link}
                  >
                    {items.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="md:flex  items-center justify-between py-[40px] w-[90%]">
            <p className="text-[14px] text-[#a5adb3]  ">
              ©Copyright. Designed And Developed By Themesine
            </p>
            <div className="flex items-center justify-evenly">
              <div className="text-[14px] text-[#a5adb3] flex items-center hover:text-[#ff545a] transition-all 0.7s cursor-pointer">
                <IoIosCall /> +1 (222) 777 8888
              </div>
              {footerIcon.map((items) => (
                <div
                  key={items.id}
                  className="bg-[#eef2f6] w-[35px] h-[35px] rounded-full flex  items-center justify-center text-[#afb4bf] mx-[10px] hover:bg-[#ff545a] hover:text-[#ffffff] cursor-pointer transition-all 0.7s"
                >
                  {items.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
