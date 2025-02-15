import Icon from "../../ui/Icon";

const VehicleEquipment = ({ tempFilters, setTempFilters }) => {
  const handleEquipmentChange = (key) => {
    const stringKey = String(key);
    console.log("Selected key:", key);
    console.log("Current equipment:", tempFilters.equipment);

    if (key === "transmission") {
      setTempFilters((prev) => ({
        ...prev,
        transmission: prev.transmission === "automatic" ? "" : "automatic",
      }));
    } else {
      setTempFilters((prev) => {
        const updatedEquipment = prev.equipment.includes(stringKey)
          ? prev.equipment.filter((item) => item !== stringKey)
          : [...prev.equipment, stringKey];

        console.log("Updated equipment:", updatedEquipment);
        return { ...prev, equipment: updatedEquipment };
      });
    }
  };

  return (
    <>
      <h3 className="mb-2 mt-4 block text-custom text-black">
        Vehicle Equipment
      </h3>
      <hr className="my-6 h-px w-full bg-gray-300" />
      <div className="mb-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => handleEquipmentChange("transmission")}
          className={`flex h-24 w-28 flex-col items-center justify-center gap-2 rounded-[12px] border transition-all ${tempFilters.transmission === "automatic" ? "border-red" : ""} text-black`}
        >
          <Icon id="icon-automatic" w={32} h={32} className="fill-black" />
          Automatic
        </button>
        <button
          type="button"
          onClick={() => handleEquipmentChange("AC")}
          className={`flex h-24 w-28 flex-col items-center justify-center gap-2 rounded-[12px] border transition-all ${tempFilters.equipment.includes("AC") ? "border-red" : ""} text-black`}
        >
          <Icon id="wind" w={32} h={32} className="fill-black" />
          AC
        </button>
        <button
          type="button"
          onClick={() => handleEquipmentChange("gas")}
          className={`flex h-24 w-28 flex-col items-center justify-center gap-2 rounded-[12px] border text-black transition-all ${tempFilters.equipment.includes("gas") ? "border-red" : ""} `}
        >
          <Icon
            id="hugeicons_gas-stove"
            w={32}
            h={32}
            className="fill-white stroke-black"
          />
          Gas
        </button>
        <button
          type="button"
          onClick={() => handleEquipmentChange("kitchen")}
          className={`flex h-24 w-28 flex-col items-center justify-center gap-2 rounded-[12px] border transition-all ${tempFilters.equipment.includes("kitchen") ? "border-red" : ""} text-black`}
        >
          <Icon id="cup-hot" w={32} h={32} className="fill-black" />
          Kitchen
        </button>
        <button
          type="button"
          onClick={() => handleEquipmentChange("TV")}
          className={`flex h-24 w-28 flex-col items-center justify-center gap-2 rounded-[12px] border transition-all ${tempFilters.equipment.includes("TV") ? "border-red" : ""} text-black`}
        >
          <Icon id="tv" w={32} h={32} className="fill-black" />
          TV
        </button>
        <button
          type="button"
          onClick={() => handleEquipmentChange("bathroom")}
          className={`flex h-24 w-28 flex-col items-center justify-center gap-2 rounded-[12px] border transition-all ${tempFilters.equipment.includes("bathroom") ? "border-red" : ""} text-black`}
        >
          <Icon id="ph_shower" w={32} h={32} className="fill-black" />
          Bathroom
        </button>
        <button
          type="button"
          onClick={() => handleEquipmentChange("water")}
          className={`flex h-24 w-28 flex-col items-center justify-center gap-2 rounded-[12px] border text-black transition-all ${tempFilters.equipment.includes("water") ? "border-red" : ""} `}
        >
          <Icon
            id="ion_water-outline"
            w={32}
            h={32}
            className="fill-white stroke-black"
          />
          Water
        </button>
        <button
          type="button"
          onClick={() => handleEquipmentChange("radio")}
          className={`flex h-24 w-28 flex-col items-center justify-center gap-2 rounded-[12px] border transition-all ${tempFilters.equipment.includes("radio") ? "border-red" : ""} text-black`}
        >
          <Icon id="ui-radios" w={32} h={32} className="fill-black" />
          Radio
        </button>
        <button
          type="button"
          onClick={() => handleEquipmentChange("refrigerator")}
          className={`flex h-24 w-28 flex-col items-center justify-center gap-2 rounded-[12px] border transition-all ${tempFilters.equipment.includes("refrigerator") ? "border-red" : ""} text-black`}
        >
          <Icon
            id="solar_fridge-outline"
            w={32}
            h={32}
            className="fill-black"
          />
          Refrigerator
        </button>
        <button
          type="button"
          onClick={() => handleEquipmentChange("microwave")}
          className={`flex h-24 w-28 flex-col items-center justify-center gap-2 rounded-[12px] border text-black transition-all ${tempFilters.equipment.includes("microwave") ? "border-red" : ""} `}
        >
          <Icon
            id="lucide_microwave"
            w={32}
            h={32}
            className="fill-white stroke-black"
          />
          Microwave
        </button>
      </div>
    </>
  );
};

export default VehicleEquipment;
