import { SearchIcon } from "@/components/SearchIcon";
const SearchButton = ({ search, onChangeText, onPressEnter }) => {
  return (
    <div className="w-[400px] h-10 rounded-3xl border-solid border-slate-950 bg-white ml-10 drop-shadow-lg text-black flex gap-3 items-center pl-3 ">
      <SearchIcon />
      <input
        className="focus:outline-0"
        type="text"
        onChange={onChangeText}
        value={search}
        placeholder="Search"
        onKeyDown={onPressEnter}
      ></input>
    </div>
  );
};
export { SearchButton };
