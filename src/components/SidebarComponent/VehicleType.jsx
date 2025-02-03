import Icon from "../../ui/Icon";
import { vehicleTypes } from "../../data/vehicleFeatures";

const VehicleType = () => {
  return (
    <div>
      {/* Фільтр за типом транспорту */}
      <div className="mb-10 flex flex-wrap gap-3">
        {vehicleTypes.map((type) => (
          <button
            key={type.id}
            type="button"
            className="flex h-24 w-28 flex-col items-center justify-center gap-2 rounded-[12px] border text-black focus:border-red"
          >
            <Icon id={type.icon} w={32} h={32} className="fill-black" />
            {type.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VehicleType;
