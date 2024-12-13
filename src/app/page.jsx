"use client";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { Manrope, Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin", "greek"] });
const BackGroundCircle = () => {
  return (
    <div className="absolute flex justify-center items-center ml-[100px] bottom-[590px]">
      <div className="border rounded-full w-[140px] h-[140px] absolute opacity-10 border-black"></div>
      <div className="border rounded-full w-[140px] h-[140px] absolute opacity-10 border-white"></div>
      <div className="border rounded-full w-[340px] h-[340px] absolute opacity-10 border-black"></div>
      <div className="border rounded-full w-[340px] h-[340px] absolute opacity-10 border-white"></div>
      <div className="border rounded-full w-[540px] h-[540px] absolute opacity-10 border-black"></div>
      <div className="border rounded-full w-[540px] h-[540px] absolute opacity-10 border-white"></div>
      <div className="border rounded-full w-[940px] h-[940px] absolute opacity-10 border-black"></div>
      <div className="border rounded-full w-[940px] h-[940px] absolute opacity-10 border-white"></div>
      <div className="border rounded-full w-[1340px] h-[1340px] absolute opacity-10 border-black"></div>
      <div className="border rounded-full w-[1340px] h-[1340px] absolute opacity-10 border-whtie"></div>
      <div className="border rounded-full w-[1740px] h-[1740px] absolute opacity-10 border-black"></div>
      <div className="border rounded-full w-[1740px] h-[1740px] absolute opacity-10 border-whtie"></div>
    </div>
  );
};

const SearchButton = ({value}) => {
  const [city, setCity] = useState();
  return (
    <div>
      <input onChange={(e)=>setCity(e.target.value)} value={city} className="w-[400px] h-10 rounded-3xl border-solid border-slate-950 bg-white ml-10 drop-shadow-lg"></input>
    </div>
  );
};
const Card = ({ value, temperature, status }) => {
  const [data, setData] = useState();
  useEffect(() => {
 fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Ulaanbaatar&units=metric&appid=358f72950feb453d5adf7c57e441e1ec`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data)
      });
  });
  const backgroundColor = value === "day" ? "bg-white" : "bg-[#111827BF]";
  const imageBackground =
    value === "night"
      ? "bg-gradient-to-b from-[#1F2937] to-[#111827]"
      : "bg-white";
  const imageUrl = value === "day" ? "/sun-icon.png" : "/moon.png";
  const textGradient =
    value === "day"
      ? "bg-gradient-to-b from-[#111827] to-[#6B7280]"
      : "bg-gradient-to-b from-[#F9FAFB] to-[#000000]";
  const textColor = value === "night" ? "text-white" : "text-[#111827]";
  const imageShadow = (value = "night"
    ? "drop-shadow-[0px_5px_25px_rgba(255,255,255,0.5)]"
    : "drop-shadow-[0px_5px_25px_rgba(0,0,0,0.5)]");
  const statusColor = value === "day" ? "text-[#FF8E27]" : "text-[#777CCE]";
  return (
    <div className="mt-[50px] z-10">
      <div
        className={`${manrope.className} text-slate-900 w-[414px] h-[828px] rounded-[48px] ${backgroundColor} ml-10`}
      >
        <div
          className={` pt-[80px] w-[404px] h-[404px] rounded-[42px] mx-auto ${imageBackground} `}
        >
          <h1
            className={`text-[48px] text-[#111827] font-extrabold ml-[40px] ${textColor}`}
          >
            Kraków
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
        <h2 className={`text-[24px] font-extrabold ml-[40px] ${statusColor}  `}>
          {status}
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
  return (
    <div className="w-screen h-full mx-auto bg-slate-800 relative flex justify-center items-center ">
      <div className="w-3/4 h-screen mx-auto rounded-3xl bg-background-white flex justify-center gap-[100px] overflow-hidden relative">
        <img
          className="absolute right-[47%] bottom-[46%] w-[50px]"
          src="/logo-left.png"
        />
        <img
          className="absolute right-[43.5%] bottom-[46.1%] w-[50px]"
          src="/logo-right.png"
        />

        <div className="mt-[100px] ml-[140px] relative z-10">
          <SearchButton />
          <Card value="day" temperature="26°" status="Bright" />
        </div>
        <div className="w-[50%] bg-[url('/Subtract.png')] bg-no-repeat bg-center h-screen flex justify-center items-center ml-[200px]">
          <Card value="night" temperature="17°" status="Clear" />
        </div>
        <BackGroundCircle />
      </div>
    </div>
  );
}
