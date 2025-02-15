import Icon from "../../ui/Icon";

function EngineType({ tempFilters, setTempFilters }) {
  const handleEngineChange = (type) => {
    setTempFilters((prev) => ({
      ...prev,
      engine: prev.engine === type ? "" : type,
    }));
  };

  const getButtonClass = (type) => {
    return `flex h-24 w-28 flex-col items-center justify-center gap-2 rounded-[12px] border transition-all ${tempFilters.engine === type ? "border-red" : ""} text-black`;
  };

  return (
    <>
      <h3 className="mb-2 mt-4 block text-custom text-black">Engine Type</h3>
      <hr className="my-6 h-px w-full bg-gray-300" />
      <div className="mb-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => handleEngineChange("petrol")}
          className={getButtonClass("petrol")}
          aria-label="Select Petrol Engine"
        >
          <Icon id="fuel-pump" w={32} h={32} className="fill-black" />
          Petrol
        </button>
        <button
          type="button"
          onClick={() => handleEngineChange("diesel")}
          className={getButtonClass("diesel")}
          aria-label="Select Petrol Engine"
        >
          <Icon id="fuel-pump" w={32} h={32} className="fill-black" />
          Diesel
        </button>
        <button
          type="button"
          onClick={() => handleEngineChange("hybrid")}
          className={getButtonClass("hybrid")}
          aria-label="Select Petrol Engine"
        >
          <Icon id="fuel-pump" w={32} h={32} className="fill-black" />
          Hybrid
        </button>
      </div>
    </>
  );
}

export default EngineType;
