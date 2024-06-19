import React from "react";
import "./Blog.css";
import b1 from "../../Image/b1.jpg";
import b2 from "../../Image/b2.jpg";
import b3 from "../../Image/b3.jpg";

const blogItems = [
  {
    id: 1,
    img: b1,
    h5: "How to find your Desired Place more quickly",
  },
  {
    id: 2,
    img: b2,
    h5: "How to find your Desired Place more quickly",
  },
  {
    id: 3,
    img: b3,
    h5: "How to find your Desired Place more quickly",
  },
];

function Blog() {
  return (
    <>
      <div className="my-[100px]">
        <div className="mb-[80px]">
          <h2 className="text-[24px] text-[#505866] text-center mb-[24px]">
            NEWS AND ARTICLES
          </h2>
          <p className="text-[16px] text-[#767f86]  text-center">
            Always upto date with our latest News and Articles
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-evenly">
          {blogItems.map((items) => (
            <div
              key={items.id}
              className="h-[470px] mx-[20px] my-[20px] w-[360px] blog-box"
            >
              <div>
                <img src={items.img} alt="" />
              </div>
              <div className="px-[25px] py-[37px]">
                <h5 className="text-[16px] text-[#343a3f] mb-[10px] font-semibold">
                  {items.h5}
                </h5>
                <div className="flex items-center text-[14px] mb-[10px] text-[#8f949d]">
                  <h4 className="border-r pr-[15px]">
                    Posted by{" "}
                    <span className="text-[#343A3F] font-semibold">ADMIN</span>
                  </h4>
                  <h4 className="pl-[15px]">March 2018</h4>
                </div>
                <p className="text-[#767f86] text-[14px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                  cum modi vel atque dolorem itaque, facilis repudiandae
                  quisquam iste.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
