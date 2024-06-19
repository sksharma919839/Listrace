import React from "react";
import "./Works.css";
import { TbBulb } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa6";
import { FaMapLocation } from "react-icons/fa6";
import { Link } from "react-router-dom";

const workItem = [
  {
    id: 0,
    icon: <TbBulb />,
    h2: "Choose what to Do",
    p: "Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.",
  },
  {
    id: 1,
    icon: <FaCarSide />,
    h2: "Find what you want",
    p: "Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.",
  },
  {
    id: 2,
    icon: <FaMapLocation />,
    h2: "Explore amazing Place",
    p: "Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.",
  },
];
function Works() {
  return (
    <>
      <div className="my-[150px]">
        <div>
          <h2 className="text-[24px] mb-[20px] text-[#505866] font-medium text-center">
            HOW IT WORKS
          </h2>
          <p className="text-[16px] mb-[90px] text-[#767f86] text-center">
            Learn More about how our website works
          </p>
        </div>
        <div className="flex items-center flex-wrap justify-evenly">
          {workItem.map((item) => (
            <div
              key={item.id}
              className="h-[390px] w-[320px] my-[20px] mx-[20px]  work-box  bg-[#ffffff]"
            >
              <div className="px-[42px] py-[50px]">
                <div className="work-icon h-[80px] text-[50px] mx-[75px] text-[#50616c] flex   items-center justify-center w-[80px] rounded-[50%] bg-[#eef2f6]">
                  {item.icon}
                </div>
                <h2 className="text-center my-[20px]">
                  <Link className="work-h2 text-[18px] text-[#343a3f]  font-semibold">
                    {item.h2}
                  </Link>
                </h2>
                <p className="work-p text-[14px] mb-[30px] text-[#767f86] text-center">
                  {item.p}
                </p>
                <button className="work-btn text-center mx-[60px] px-[20px] py-[10px] text-[#767f86] text-[12px] border rounded">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Works;
