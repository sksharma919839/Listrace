import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import c1 from "../../Image/c1.png";
import c2 from "../../Image/c2.png";
import c3 from "../../Image/c3.png";
import c4 from "../../Image/c4.png";

const reviewItem = [
  {
    id: 1,
    img: c1,
    h1: "Monirul Isalam",
    h4: "London,UK",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Minus alias cumque iure itaque illo, laudantium, deserunt cum adipisci recusandae, placeat ea.",
  },
  {
    id: 2,
    img: c2,
    h1: "Tom Leakar",
    h4: "London,UK",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Minus alias cumque iure itaque illo, laudantium, deserunt cum adipisci recusandae, placeat ea.",
  },
  {
    id: 3,
    img: c3,
    h1: "Tom Leaker",
    h4: "London,UK",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Minus alias cumque iure itaque illo, laudantium, deserunt cum adipisci recusandae, placeat ea.",
  },
  {
    id: 4,
    img: c4,
    h1: "Shohrab Hossain",
    h4: "London,UK",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Minus alias cumque iure itaque illo, laudantium, deserunt cum adipisci recusandae, placeat ea.",
  },
];

function Review() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="mt-[100px]">
        <div>
          <h2 className="text-center mb-[50px]">
            <Link className="text-[24px] font-semibold text-[#505866]">
              CLIENTS REVIEWS
            </Link>
          </h2>
          <p className="text-[16px] mb-[80px]  text-center text-[#767f86]">
            What our client say about us
          </p>
        </div>
        <div>
          {" "}
          <div className="flex items-center justify-center">
            <div className="slider-container container w-[100%] overflow-hidden">
              <Slider {...settings}>
                {reviewItem.map((items) => (
                  <div key={items.id} className="my-[80px]">
                    <div className="lg:w-[368px] w-[100%] lg:h-[259px]  review-box rounded-lg  py-[50px] px-[30px] ">
                      <div className="md:flex items-center mb-[35px]">
                        <img src={items.img} alt="" />
                        <div className="md:ml-[20px]">
                          <h2 className="text-[18px] text-[#505866]">
                            {items.h1}
                          </h2>
                          <h4 className="text-[14px] text-[#a2a5ab]">
                            {items.h4}
                          </h4>
                        </div>
                      </div>
                      <div>
                        <p className="text-[14px] flex-wrap text-[#8d939e]">
                          {items.p}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
