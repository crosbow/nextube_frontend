import { Link } from "react-router-dom";
import BelIcon from "../assets/icons/BelIcon";
import SearchIcon from "../assets/icons/SearchIcon";
import Input from "./ui/Input";

const Header = () => {
  return (
    <nav className="flex text-xl px-6 py-2 justify-between sticky top-0  z-50 bg-white/95 backdrop:blur-3xl border-b border-black/10 shadow/5">
      <div className="flex items-center gap-3 ">
        <p className="text-4xl leading-none">≡</p>
        <h2 className=" mt-2 font-bold"> ▶ NexTube</h2>
      </div>
      <div className=" hidden md:flex w-[40%] h-10  relative">
        <Input
          className="h-full border w-full border-gray-400 rounded-s-full text-[16px] px-4 focus:outline-blue-400 outline-[0.5px]"
          placeholder="Search"
          type="text"
        />
        <button className="px-4 grid place-content-center bg-gray-200 rounded-e-full border border-gray-400 border-l-0 hover:bg-gray-300">
          <SearchIcon />
        </button>
      </div>
      <div className="flex">
        <button className=" px-2 text-base   grid place-content-center rounded-full bg-gray-400/50 hover:bg-gray-300 text-nowrap">
          + Create
        </button>
        <button className=" w-10 py-2  grid place-content-center rounded-full ml-4 hover:bg-gray-300">
          <BelIcon />
        </button>
        <Link
          to="/profile"
          className=" w-10 h-10 overflow-hidden  grid place-content-center rounded-full ml-4 hover:bg-gray-300"
        >
          <img
            src="https://avatars.githubusercontent.com/u/158416334?s=400&u=8b107573aea2d1c92bf09fa0f98703746f2a2815&v=4"
            alt=""
          />
        </Link>
      </div>
    </nav>
  );
};
export default Header;
