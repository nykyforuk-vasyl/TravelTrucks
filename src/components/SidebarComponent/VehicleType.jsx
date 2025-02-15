import Icon from "../../ui/Icon";

const VehicleType = ({ tempFilters, setTempFilters }) => {
  const handleVehicleTypeChange = (type) => {
    setTempFilters((prev) => ({
      ...prev,
      vehicleType: prev.vehicleType === type ? "" : type,
    }));
  };

  const getButtonClass = (type) => {
    return `flex h-24 w-28 flex-col items-center justify-center gap-2 rounded-[12px] border text-black transition-all ${
      tempFilters.vehicleType === type ? "border-red" : ""
    }`;
  };

  return (
    <>
      <h3 className="mb-2 mt-4 block text-custom text-black">Vehicle Type</h3>
      <hr className="my-6 h-px w-full bg-gray-300" />
      <div className="mb-10 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => handleVehicleTypeChange("panelTruck")}
          className={getButtonClass("panelTruck")}
        >
          <Icon id="bi_grid-1x22x" w={32} h={32} className="fill-black" />
          Panel Truck
        </button>
        <button
          type="button"
          onClick={() => handleVehicleTypeChange("fullyIntegrated")}
          className={getButtonClass("fullyIntegrated")}
        >
          <Icon id="bi_grid" w={32} h={32} className="fill-black" />
          Fully Integrated
        </button>
        <button
          type="button"
          onClick={() => handleVehicleTypeChange("alcove")}
          className={getButtonClass("alcove")}
        >
          <Icon id="bi_grid-3x3-gap" w={32} h={32} className="fill-black" />
          Alcove
        </button>
      </div>
    </>
  );
};

export default VehicleType;
