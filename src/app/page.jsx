"use client";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { Card } from "@/components/Card";
import { SearchButton } from "@/components/SearchButton";
import { BackGroundCircle } from "@/components/BackGroundCircle";
import { Manrope, Manrope } from "next/font/google";
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
    date: "",
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
          date: data?.forecast?.forecastday[0].date,
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
          className=" absolute right-[50%] bottom-[50%] translate-x-[50px] translate-y-12 w-[50px]"
          src="/logo-f.png"
        />
        <img
          className="absolute right-[50] bottom-[50%] translate-x-[80px] translate-y-12 w-[50px]"
          src="/logo-r.png"
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
              status={dayTemp.condition.trim().toLocaleLowerCase()}
              city={city}
              date={dayTemp.date}
            />
          )}
        </div>
        <div className="w-[50%] bg-[url('/Subtract.png')] bg-no-repeat bg-center h-screen flex justify-center items-center ml-[200px]">
          {nightTemp && (
            <Card
              value="night"
              temperature={Math.round(nightTemp.temperature)}
              status={nightTemp.condition.trim().toLocaleLowerCase()}
              city={city}
              date={dayTemp.date}
            />
          )}
        </div>
        <BackGroundCircle />
      </div>
    </div>
  );
}
