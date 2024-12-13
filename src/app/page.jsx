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
const apiKey = "358f72950feb453d5adf7c57e441e1ec";
const SearchButton = ({ search, onChangeText, onPressEnter }) => {
  return (
    <div>
      <input
        onChange={onChangeText}
        value={search}
        onKeyDown={onPressEnter}
        className="w-[400px] h-10 rounded-3xl border-solid border-slate-950 bg-white ml-10 drop-shadow-lg"
      ></input>
    </div>
  );
};
const Card = ({ value, temperature, status, city }) => {
  const backgroundColor = value === "day" ? "bg-white" : "bg-[#111827BF]";
  const getDayImage = (status) => {
    switch (status) {
      case "Sunny":
        return "sun-icon.png";
      case "Overcast" || "Clouds":
        return "Day Clouds.png";
      case "Heavy rain" || "Light rain":
        return "Day Rain.png";
      case "Wind":
        return "Day Wind.png";
      case "Snow":
        return "Day Snow.png";
      case "Storm":
        return "Day Storm.png";
      default:
        return "sun-icon.png";
    }
  };
  const getNightImage = (status) => {
    switch (status) {
      case "Clear":
        return "moon.png";
      case "Cloudy":
        return "Night Clouds.png";
      case "Patchy light rain":
        return "Night Rain.png";
      case "Wind":
        return "Night Wind.png";
      case "Snow":
        return "Night Snow";
      case "Storm":
        return "Night Storm.png";
      default:
        return "moon.png";
    }
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
      : "drop-shadow-[0px_5px_25px_rgba(0,0,0,0.5)]";
  const statusColor = value === "day" ? "text-[#FF8E27]" : "text-[#777CCE]";
  console.log(value);
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
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("ulaanbaatar");

  const onChangeText = (event) => {
    setSearch(event.target.value);
  };
  const onPressEnter = (e) => {
    if (e.code === "Enter") {
      setCity(search);
    }
  };
  const [data, setData] = useState();
  const [dayTemp, setDayTemp] = useState({
    temperature: 0,
    condition: "",
  });
  const [nightTemp, setNightTemp] = useState({
    temperature: 0,
    condition: "",
  });
  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=a67f1e26cad343d69cd85305241312&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setDayTemp({
          temperature: data?.forecast?.forecastday[0].day.maxtemp_c,
          condition: data?.forecast?.forecastday[0].day.condition.text,
        });
        setNightTemp({
          temperature: data?.forecast?.forecastday[0].day.mintemp_c,
          condition: data?.forecast?.forecastday[0].hour[23].condition.text,
        });
        console.log(data);
      });
  }, [city]);

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
          <SearchButton
            search={search}
            onChangeText={onChangeText}
            onPressEnter={onPressEnter}
          />
          {dayTemp && (
            <Card
              value="day"
              temperature={Math.round(dayTemp.temperature)}
              status={dayTemp.condition.trim()}
              city={city}
            />
          )}
        </div>
        <div className="w-[50%] bg-[url('/Subtract.png')] bg-no-repeat bg-center h-screen flex justify-center items-center ml-[200px]">
          {nightTemp && (
            <Card
              value="night"
              temperature={Math.round(nightTemp.temperature)}
              status={nightTemp.condition.trim()}
              city={city}
            />
          )}
        </div>
        <BackGroundCircle />
      </div>
    </div>
  );
}
