const SearchBar = () => {
  return (
    <div className="flex-1 max-w-2xl mx-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search videos, channels, categories..."
          className="rounded-s-full w-full px-6 py-3 pl-12 bg-gray-800 bg-opacity-50 rounded-2xl border border-gray-700 focus:border-purple-500 focus:outline-none transition-all"
        />
        <svg
          className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};
export default SearchBar;
