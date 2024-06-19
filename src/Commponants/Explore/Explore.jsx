import React from "react";
import "./Explore.css";
import { Link } from "react-router-dom";
import e1 from "../../Image/e1.jpg";
import e2 from "../../Image/e2.jpg";
import e3 from "../../Image/e3.jpg";
import e4 from "../../Image/e4.jpg";
import e5 from "../../Image/e5.jpg";
import e6 from "../../Image/e6.jpg";
import person from "../../Image/person.png";

const exploreItem = [
  {
    id: 0,
    img: e1,
    h2: "Tommy Helfinger Bar",
  },
  {
    id: 1,
    img: e2,
    h2: "Swim And Dine Resort",
  },
  {
    id: 2,
    img: e3,
    h2: "Europe Tour",
  },
  {
    id: 3,
    img: e4,
    h2: "Banglow With Swiming Pool",
  },
  {
    id: 4,
    img: e5,
    h2: "Vintage Car Expo",
  },
  {
    id: 5,
    img: e6,
    h2: "Thailand Tour",
  },
];

function Explore() {
  return (
    <>
      <div className="bg-[#F8FAFB] py-[80px]">
        <div>
          <h2 className="text-[24px] text-[#505866] mb-[25px] text-center">
            EXPLORE
          </h2>
          <p className="text-16px mb-[80px] text-[#767f86] text-center">
            Explore New place, food, culture around the world and many more
          </p>
        </div>
        <div className="flex items-center justify-evenly flex-wrap">
          {exploreItem.map((item) => (
            <div
              key={item.key}
              className="explore-box h-[420px] mx-[15px] my-[40px] w-[320px]"
            >
              <div>
                <img src={item.img} alt="" />
              </div>
              <div className="mt-[30px] ml-[30px]">
                <h2 className="text-[16px] text-[#343a3f] font-semibold">
                  <Link to="/">{item.h2}</Link>
                </h2>
                <div className="flex items-center justify-evenly mt-[30px]">
                  <img src={person} alt="" />
                  <p className="text-[12px] text-[#767f86] px-[20px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incid ut labore et dolore magna
                    aliqua....
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Explore;
