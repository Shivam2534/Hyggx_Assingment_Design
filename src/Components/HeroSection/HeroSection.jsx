import React from "react";
import study from "../../../public/study.png";
import reload from "../../../public/reload.png";
import resize from "../../../public/resize.png";
import right from "../../../public/right.png";
import left from "../../../public/left.png";
import icon1 from "../../../public/icon1.png";
import icon2 from "../../../public/icon2.png";
import icon3 from "../../../public/icon3.png";

function HeroSection() {
  return (
    <div className="">
      <div className="mt-14">
        <h1 className="text-[#1145B8] text-xl font-bold">
          Relation and Functions ( Mathematics )
        </h1>
      </div>

      <div className=" flex justify-center mt-14">
        <ul className="flex gap-5 md:gap-14">
          <li className=" font-semibold text-[#1145B8] underline underline-offset-8">
            Study
          </li>
          <li className=" font-semibold text-[#696671]">Quiz</li>
          <li className=" font-semibold text-[#696671]">Test</li>
          <li className=" font-semibold text-[#696671]">Game</li>
          <li className=" font-semibold text-[#696671]">Others</li>
        </ul>
      </div>

      <div className="flex justify-center items-center mt-8 flex-col">
        <div className="w-full md:w-110">
          <img src={study} className="w-full md:w-110" alt="Study" />

          <div className="flex justify-between items-center mt-8 px-5 md:px-14 ">
            <div>
              <img src={reload} alt="" className="w-6 h-6" />
            </div>
            <div className="flex justify-center items-center gap-3 md:gap-9">
              <img src={left} alt="" className="w-7 h-7" />
              <p>01/10</p>
              <img src={right} alt="" className="w-7 h-7" />
            </div>
            <div>
              <img src={resize} alt="" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-wrap sm:flex-nowrap justify-center md:justify-between md:items-center mt-20">
        <div className="flex items-center justify-center sm:justify-start sm:ml-0 md:ml-0 w-full md:w-1/2 ">
          <img src={icon3} alt="" className="h-20 w-20" />
          <img src={icon1} className="" alt="" />
        </div>
        <img src={icon2} alt="" className="w-full sm:ml-0 md:ml-0 md:w-96"/>
      </div>
    </div>
  );
}

export default HeroSection;
