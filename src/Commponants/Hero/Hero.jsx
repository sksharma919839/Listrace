import React from "react";
import "./Hero.css";
import { FaListUl } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

function Hero() {
  return (
    <>
      <div className="hero-bg">
        <div className="sm:pt-[170px] w-[100%] pt-[120px]">
          <h2 className="md:text-[48px] sm:text-[40px] text-[36px] text-center text-[#ffffff] font-bold">
            BEST PLACE TO FIND AND EXPLORE <br /> THAT ALL YOU NEED
          </h2>
          <p className="text-[18px] my-[40px] text-center text-[#fcfcfc]">
            Find Best Place, Restaurant, Hotel, Real State and many more think
            in just One click
          </p>
          <div className="lg:flex w-[100%] items-center justify-center">
            <div className="lg:flex justify-center items-center ">
              <div className="flex items-center lg:rounded-none lg:my-[0] my-[10px] rounded-xl sm:w-[470px] w-[310px] lg:mx-0 mx-[10px] rounded-l-xl justify-evenly bg-[#fcfcfc]">
                <legend className="text-[18px] text-[#343a3f] font-semibold">
                  What?
                </legend>
                <input
                  className="w-[300px] sm:px-[0] px-[10px] h-[70px]"
                  type="text"
                  placeholder="Ex: Place,Resturent,Food,Automobile"
                />
                <FaListUl size={20} />
              </div>
              <div className="flex items-center lg:mx-0 mx-[10px] lg:rounded-none lg:my-0 my-[10px] rounded-xl sm:w-[470px] w-[310px] rounded-r-xl justify-evenly bg-[#fcfcfc]">
                <legend className="text-[18px] text-[#343a3f] font-semibold">
                  Location
                </legend>
                <input
                  className="w-[300px] h-[70px]"
                  type="text"
                  placeholder="Ex: London,Newyork,Rame"
                />
                <FaLocationCrosshairs size={20} />
              </div>
            </div>
            <button className="flex items-center ml-[15px] lg:my-0 my-[10px]  rounded-xl justify-center text-[14px]  h-[70px] w-[170px] bg-[#ff545a] text-[#ffffff]">
              Search <CiSearch className="ml-[10px]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
