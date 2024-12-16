import { Manrope } from "next/font/google";
import { use, useEffect, useState } from "react";
import { HomeIcon } from "./HomeIcon";
import { PinIcon } from "./PinIcon";
import { HeartIcon } from "./HeartIcon";
import { UserIcon } from "./UserIcon";
const manrope = Manrope({ subsets: ["latin", "greek"] });
const Card = ({ value, temperature, status, city }) => {
  const d = new Date();
  let date = d.toDateString();
  const backgroundColor = value === "day" ? "bg-white" : "bg-[#111827BF]";
  const getDayImage = (status) => {
    if (status.includes("snow")) {
      return "Day Snow.png";
    }
    if (status.includes("rain")) {
      return "Day Rain.png";
    }
    if (status.includes("cloud") || status.includes("overcast")) {
      return "Day Clouds.png";
    }
    if (status.includes("storm")) {
      return "Day Storm.png";
    }
    if (status.includes("wind")) {
      return "Day Wind.png";
    }
    return "sun-icon.png";
  };
  const getNightImage = (status) => {
    if (status.includes("snow")) {
      return "Night Snow.png";
    }
    if (status.includes("rain")) {
      return "Night Rain.png";
    }
    if (status.includes("cloud") || status.includes("overcast")) {
      return "Night Clouds.png";
    }
    if (status.includes("storm")) {
      return "Night Storm.png";
    }
    if (status.includes("wind")) {
      return "Night Wind.png";
    }
    return "moon.png";
  };
  const imageBackground =
    value === "night"
      ? "bg-gradient-to-b from-[#1F2937] to-[#111827]"
      : "bg-white";
  const imageUrl =
    value === "day" ? getDayImage(status) : getNightImage(status);
  const textGradient =
    value === "day"
      ? "bg-gradient-to-b from-[#111827] to-[#6B7280]"
      : "bg-gradient-to-b from-[#F9FAFB] to-[#000000]";
  const textColor = value === "night" ? "text-white" : "text-[#111827]";
  const imageShadow =
    value === "night"
      ? "drop-shadow-[0px_5px_25px_rgba(255,255,255,0.5)]"
      : "drop-shadow-[0px_5px_25px_rgba(255,214,10,0.5)]";
  const statusColor = value === "day" ? "text-[#FF8E27]" : "text-[#777CCE]";
  const dateColor = value === "day" ? "text-black" : "text-[#9CA3AF]";
  const homeIconColor = value === "day" ? "black" : "white";
  return (
    <div className="mt-[50px] z-10">
      <div
        className={`${manrope.className} text-slate-900 w-[414px] h-[828px] rounded-[48px] ${backgroundColor} ml-10`}
      >
        <div
          className={` pt-[40px] w-[404px] h-[404px] rounded-[42px] mx-auto ${imageBackground} `}
        >
          <h1
            className={`ml-[40px] text-[18px] text-bold font-medium  ${dateColor} `}
          >
            {date}
          </h1>
          <h1
            className={` capitalize text-[48px] text-[#111827] font-extrabold ml-[40px] ${textColor}`}
          >
            {city}
          </h1>
          <img
            src={imageUrl}
            className={`w-[262px] h-[262px] mx-auto mt-[40px] ${imageShadow}`}
          />
        </div>

        <h1
          className={`text-[144px] font-extrabold ml-[40px] mt-[80px] text-transparent bg-clip-text ${textGradient}`}
        >
          {temperature}
        </h1>
        <h2
          className={`text-[24px] font-extrabold ml-[40px] ${statusColor} capitalize `}
        >
          {status}
        </h2>
        <div className=" ml-[40px] mt-[20px] flex items-center gap-[68px]">
          <HomeIcon fill={`${homeIconColor}`} />
          <PinIcon />
          <HeartIcon />
          <UserIcon />
        </div>
      </div>
    </div>
  );
};
export { Card };
