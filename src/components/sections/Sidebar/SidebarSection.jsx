const SidebarSection = () => {
  return (
    <aside className="w-72 rounded-lg bg-white p-4 shadow-lg">
      {/* Location */}
      <div>
        <label className="text-sm font-semibold text-gray-500">Location</label>
        <div className="mt-1 flex items-center gap-2 rounded-lg bg-gray-100 p-3">
          <span className="text-gray-700">📍</span>
          <span className="text-gray-700">Kyiv, Ukraine</span>
        </div>
      </div>

      {/* Filters */}
      <h3 className="mt-4 text-lg font-semibold">Filters</h3>

      {/* Vehicle Equipment */}
      <div className="mt-3">
        <h4 className="text-md font-semibold text-gray-700">
          Vehicle equipment
        </h4>
        <div className="mt-2 grid grid-cols-3 gap-3">
          {["AC", "Automatic", "Kitchen", "TV", "Bathroom"].map((item) => (
            <button
              key={item}
              className="flex flex-col items-center justify-center rounded-lg border border-gray-300 p-3 hover:border-red-500 active:border-red-500"
            >
              <span className="text-xl">🔥</span>
              <span className="text-sm text-gray-700">{item}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Vehicle Type */}
      <div className="mt-5">
        <h4 className="text-md font-semibold text-gray-700">Vehicle type</h4>
        <div className="mt-2 grid grid-cols-3 gap-3">
          {["Van", "Fully Integrated", "Alcove"].map((item) => (
            <button
              key={item}
              className="flex flex-col items-center justify-center rounded-lg border border-gray-300 p-3 hover:border-red-500 active:border-red-500"
            >
              <span className="text-xl">🚐</span>
              <span className="text-sm text-gray-700">{item}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Search Button */}
      <button className="mt-5 w-full rounded-full bg-red-500 py-3 text-md font-semibold text-white hover:bg-red-600">
        Search
      </button>
    </aside>
  );
};

export default SidebarSection;
