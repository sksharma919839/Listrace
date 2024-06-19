import React, { useState } from "react";
import "./Count.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const countItems = [
  {
    id: 1,
    count: 90,
    text: "Listings",
  },
  {
    id: 2,
    count: 40,
    text: "Listing Categories",
  },
  {
    id: 3,
    count: 65,
    text: "Visitors",
  },
  {
    id: 4,
    count: 50,
    text: "Happy Clients",
  },
];
function Count() {
  const [countOn, setCountOn] = useState(false);
  return (
    <>
      <div className="count-bg">
        <ScrollTrigger
          onEnter={() => {
            setCountOn(true);
          }}
          onExit={() => setCountOn(false)}
        >
          <div className="md:flex items-center justify-evenly md:px-[0] px-[70px] py-[130px]">
            {countItems.map((item) => (
              <div key={item.id}>
                <h1 className="text-[60px] text-[#ffffff]">
                  {countOn && (
                    <CountUp
                      start={0}
                      end={item.count}
                      duration={5}
                      delay={0}
                    />
                  )}
                  K+
                </h1>
                <h3 className="text-[24px] text-[#ffffff]">{item.text}</h3>
              </div>
            ))}
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
}

export default Count;
