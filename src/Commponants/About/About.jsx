import React from "react";
import  "./About.css"
import { Link } from "react-router-dom";
import { BsShop } from "react-icons/bs";
import { MdCardTravel } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { CiPill } from "react-icons/ci";
import { FaCarSide } from "react-icons/fa";

const aboutItem = [
  {
    id: 0,
    icon: <BsShop />,
    title: "Resturent",
    count: 150,
  },
  {
    id: 1,
    icon: <MdCardTravel />,
    title: "Destination",
    count: 214,
  },
  {
    id: 2,
    icon: <FaBuilding />,
    title: "Hotels",
    count: 185,
  },
  {
    id: 3,
    icon: <CiPill />,
    title: "Helthcaree",
    count: 200,
  },
  {
    id: 4,
    icon: <FaCarSide />,
    title: "Automotion",
    count: 120,
  },
];
function About() {
  return (
    <>
      <div className="flex items-center justify-evenly flex-wrap sm:mt-[-85px] mt-[40px]">
        {aboutItem.map((item) => (
          <div
            key={item.id}
            className="w-[205px] about-box h-[170px] mx-[10px] my-[10px] bg-[#ffffff]"
          >
            <div className="py-[20px] w-[100%] text-center">
              <div className="flex items-center text-[#a09e9c] text-[45px] justify-center my-[15px]">
                {item.icon}
              </div>
              <Link to="/" className="about-link text-[16px]  text-[#343a3f]">
                {item.title}
              </Link>
              <p className="text-[14px] text-[#767f86] mt-[10px]">
                {item.count} listing
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default About;
