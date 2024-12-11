"use client";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { Manrope, Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"] });
const SearchButton = () => {
  return (
    <div>
      <input className="w-[400px] h-10 rounded-3xl border-solid border-slate-950 bg-white ml-10 drop-shadow-lg"></input>
    </div>
  );
};
const Card = () => {
  return (
    <div className="mt-[50px]">
      <div
        className={`${manrope.className} text-slate-900 w-[414px] h-[828px] rounded-[48px] bg-white  ml-10 pt-[70px] `}
      >
        <h1 className="text-[48px] text-[#111827] font-extrabold ml-[40px]">
          Krakow
        </h1>
        <img
          src="/sun-icon.png"
          className="w-[262px] h-[262px] mx-auto mt-[40px]"
        />
        <h1 className="text-[144px] font-extrabold ml-[40px] mt-[60px] mb-0 text-transparent bg-clip-text bg-gradient-to-b from-[#111827] to-[#6B7280]">
          26°
        </h1>
        <h2 className="text-[24px] text-[#FF8E27] font-extrabold ml-[40px]">
          Bright
        </h2>
        <div>
          {/* <img src="" />
          <img src="" />
          <img src="" />
          <img src="" /> */}
        </div>
      </div>
    </div>
  );
};
const CardRight = () => {
  return (
    <div>
      <div
        className={`${manrope.className} text-slate-900 w-[414px] h-[828px] rounded-[48px] bg-[#111827BF] opacity-75  `}
      >
        <div className="w-[404px] h-[504px] bg-gradient-to-b from-[#1F2937] to-[#111827] rounded-[42px] mx-auto pt-10 mb-0">
          <h1 className="text-[48px] text-white font-extrabold ml-[40px]">
            Krakow
          </h1>
          <img
            src="/moon.png"
            className="w-[262px] h-[262px] mx-auto mt-[40px]"
          />
        </div>

        <h1 className="text-[144px] font-extrabold ml-[40px] mb-0 text-white text-transparent bg-clip-text bg-gradient-to-b from-[#F9FAFB]">
          17°
        </h1>
        <h2 className="text-[24px] text-[#FF8E27] font-extrabold ml-[60px]">
          Clear
        </h2>
        <div>
          {/* <img src="" />
          <img src="" />
          <img src="" />
          <img src="" /> */}
        </div>
      </div>
    </div>
  );
};
export default function Home() {
  // const [lat, setLat] = useState();
  // const [lon, setLon] = useState();
  // const [data, setData] = useState();
  // useEffect(() => {
  //   fetch(
  //     "https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=358f72950feb453d5adf7c57e441e1ec"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // });
  return (
    <div className="w-screen h-screen mx-auto bg-slate-800">
      <div className="w-3/4 h-screen mx-auto rounded-3xl bg-background-white flex justify-center gap-[100px]">
        <div className="mt-6 ml-[40px]">
          <SearchButton />
          <Card />
        </div>
        <div className="w-[50%] bg-[#0F141E] h-screen flex justify-center items-center ml-20">
          <CardRight />
        </div>
      </div>
    </div>
  );
}
