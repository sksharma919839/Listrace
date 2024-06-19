import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="bg-[#F8FAFB]">
        <div className="py-[150px]">
          <h2 className="text-[#343a3f] text-[24px] mb-[28px] text-center font-semibold">
            DO YOU WANT TO ADD YOUR BUSINESS LISTING WITH US?
          </h2>
          <p className="text-[18px] text-[7b8088] mb-[58px] text-center font-medium">
            Listrace offer you to list your business with us and we very much
            able to promote your Business.
          </p>
          <div className="flex items-center justify-center ">
            <div className=" md:w-[630px] h-[60px] md:flex items-center contact-box justify-center">
              <input
                className="text-[16px] md:w-[450px] h-[60px] bg-[#ffffff] ml-30px text-[#343a3f]"
                type="text"
                placeholder="Enter your email here"
              />
              <button className="text-[16px] text-[#ffffff]  bg-[#ff545a] w-[180px] h-full">
                Creat Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
