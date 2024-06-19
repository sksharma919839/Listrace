import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const navItem = [
    {
      id: 0,
      link: "/",
      name: "HOME",
    },
    {
      id: 1,
      link: "/works",
      name: "HOW IT WORKS",
    },
    {
      id: 2,
      link: "/explore",
      name: "EXPLORE",
    },
    {
      id: 3,
      link: "/review",
      name: "REVIEW",
    },
    {
      id: 4,
      link: "/blog",
      name: "BLOG",
    },
    {
      id: 5,
      link: "/contact",
      name: "CONTACT",
    },
  ];
  const [open, isOpen] = useState(false);
  const click = () => {
    isOpen(!open);
  };
  return (
    <>
      <div className="h-[86px] px-[40px] w-[100%] flex items-center justify-between">
        <div>
          <Link to="/" className="py-34px">
            <span className="text-[20px] text-[#1b1e20] font-extrabold">
              List
            </span>
            <span className="text-[20px] font-extrabold text-[#ff545a]">
              Race
            </span>
          </Link>
        </div>
        <ul className="hidden lg:flex items-center justify-evenly">
          {navItem.map((items) => (
            <li className="mx-[10px]" key={items.id}>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "text-[#ff545a]" : "text-[#859098]"
                  } text-[14px] px-[13px] hover:text-[#ff545a] transition-all duration-700 font-semibold`
                }
                to={items.link}
              >
                {items.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className=" lg:hidden" onClick={click}>
          {open ? (
            <AiOutlineClose
              size={40}
              className="text-[#ff545a] border  border-[#ff545a] rounded-lg p-[5px]"
            />
          ) : (
            <RiMenu2Line
              size={40}
              className="text-[#ff545a] border  border-[#ff545a] rounded-lg p-[5px]"
            />
          )}
        </div>
        <ul
          className={
            open
              ? "fixed lg:hidden left-0 top-0 w-[50%] h-full  bg-[#2d2b39] ease-in-out duration-500"
              : "ease-in-out w-[40%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <div className="pt-[20px] pl-[20px]">
            <Link to="/" className="py-34px">
              <span className="text-[20px] text-[#1b1e20] font-extrabold">
                List
              </span>
              <span className="text-[20px] font-extrabold text-[#ff545a]">
                Race
              </span>
            </Link>
          </div>
          <div className="flex items-center ">
            <div>
              {navItem.map((items) => (
                <li key={items.id} className="mx-[20px] my-[15px]">
                  <NavLink
                    to={items.link}
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-[#ff545a] " : "text-[#ffffff]"
                      } py-[7px] text-[16px] hover:text-[#ff545a]`
                    }
                  >
                    {items.name}
                  </NavLink>
                </li>
              ))}
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
