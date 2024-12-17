import { SearchIcon } from "@/components/SearchIcon";
import { use, useEffect, useState } from "react";
import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"] });
// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const DropDown = ({ value, data, setCity, setIsFocused }) => {
  return (
    <div className="absolute left-0 z-10 mt-[160px] rounded-xl w-[400px] h-[100px] bg-white shadow-lg origin-top-left pl-3 pt-3  overflow-y-auto">
      {!value == "" &&
        data.map((country) =>
          country.cities
            .filter((r) => r.toLowerCase().includes(value.toLowerCase()))
            .slice(0, 10)
            .map((name, id) => (
              <div
                onClick={() => {
                  console.log(name);
                  setCity(name);
                  setIsFocused(false);
                }}
                key={id}
                className={`flex gap-3 ${manrope.className} font-bold`}
              >
                <h1>{name}</h1>
                <h2>{country.country}</h2>
              </div>
            ))
        )}
    </div>
  );
};
const SearchButton = ({ search, onChangeText, onPressEnter, setCity }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [cityData, setCityData] = useState([]);
  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((res) => res.json())
      .then((cityData) => {
        setCityData(cityData.data);
        // console.log(cityData.data);
      });
  }, []);

  return (
    <div className="w-[400px] h-10 rounded-3xl border-solid border-slate-950 bg-white ml-10 drop-shadow-lg text-black flex gap-3 items-center pl-3 relative ">
      <SearchIcon />
      <input
        onFocus={() => {
          setIsFocused(true);
        }}
        className="focus:outline-0"
        type="text"
        onChange={onChangeText}
        value={search}
        placeholder="Search"
        onKeyDown={onPressEnter}
      ></input>
      {isFocused && (
        <DropDown
          value={search}
          data={cityData}
          setCity={setCity}
          setIsFocused={setIsFocused}
        />
      )}
    </div>
  );
};
export { SearchButton };
