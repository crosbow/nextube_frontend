import { Link } from "react-router-dom";
import BelIcon from "../assets/icons/BelIcon";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <SearchBar />
          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-3 rounded-xl hover:bg-gray-800 transition-all">
              <BelIcon />
            </button>
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-semibold transition-all">
              Upload
            </button>

            <Link to="/profile">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
