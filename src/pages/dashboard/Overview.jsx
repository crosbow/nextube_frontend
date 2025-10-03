const Overview = () => {
  return (
    <div className="flex-1 p-6 md:p-10 overflow-y-auto">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 sm:mb-0 text-white">
          Creator Dashboard
        </h1>
        <button className="flex items-center space-x-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 font-bold transition-colors text-sm shadow-xl shadow-purple-900/40 text-white">
          <span id="upload-btn-icon" />
          <span>UPLOAD NEW VIDEO</span>
        </button>
      </header>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Channel Performance Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-gray-800 shadow-xl border-t-4 border-purple-500">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-semibold text-gray-400 uppercase">
                Total Views
              </h3>
              <div id="stat-view-icon" className="text-white" />
            </div>
            <p className="text-4xl font-extrabold mb-2">12.5M</p>
            <p className="text-sm text-white font-semibold">
              +18.5% <span className="text-gray-400">vs last month</span>
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-800 shadow-xl border-t-4 border-purple-500">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-semibold text-gray-400 uppercase">
                New Subs
              </h3>
              <div id="stat-sub-icon" className="text-white" />
            </div>
            <p className="text-4xl font-extrabold mb-2">8.2K</p>
            <p className="text-sm text-gray-400 font-semibold">
              -4.1% <span className="text-gray-400">vs last month</span>
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-800 shadow-xl border-t-4 border-purple-500">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-semibold text-gray-400 uppercase">
                Watch Time (Hrs)
              </h3>
              <div id="stat-trend-icon" className="text-white" />
            </div>
            <p className="text-4xl font-extrabold mb-2">350.6K</p>
            <p className="text-sm text-white font-semibold">
              +12.9% <span className="text-gray-400">vs last month</span>
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-800 shadow-xl border-t-4 border-purple-500">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-semibold text-gray-400 uppercase">
                Latest Video Views
              </h3>
              <div id="stat-upload-icon" className="text-white" />
            </div>
            <p className="text-4xl font-extrabold mb-2">987K</p>
            <p className="text-sm text-white font-semibold">
              1st <span className="text-gray-400">in 48-hour ranking</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Overview;
