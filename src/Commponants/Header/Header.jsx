import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex items-center  justify-between sm:mx-[20px] my-[2px]">
        <div className="flex items-center justify-evenly">
          <select
            name="language"
            className="text-[14px] text-[#a7b0ba] sm:px-[18px] py-[10px]"
            id="language"
          >
            <option className="text-[12px] text-[#a7b0ba]" value="en">
              EN
            </option>
            <option className="text-[12px] text-[#a7b0ba]" value="bn">
              BN
            </option>
            <option className="text-[12px] text-[#a7b0ba]" value="ab">
              AB
            </option>
          </select>
          <select
            className="text-[14px] text-[#a7b0ba] sm:px-[18px] py-[10px]"
            name="Curuncy"
            id="curncy"
          >
            <option className="text-[12px] text-[#a7b0ba]" value="usd">
              USD
            </option>
            <option className="text-[12px] text-[#a7b0ba]" value="euro">
              EURO
            </option>
            <option className="text-[12px] text-[#a7b0ba]" value="bdt">
              BDT
            </option>
          </select>
          <div className="sm:px-[18px] px-[8px] py-[10px]">
            <CiSearch className="text-[14px] text-[#a7b0ba]" />
          </div>
        </div>
        <ul className="flex items-center justify-evenly">
          <li className="text-[12px] text-[#a7b0ba] py-[10px] sm:px-[18px] px-[5px]">
            +1 222 777 6565
          </li>
          <li>
            <Link
              to="/"
              className="text-[12px] text-[#a7b0ba] sm:px-[18px] py-[10px]"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-[12px] text-[#a7b0ba] sm:px-[18px] px-[5px] py-[10px]"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
