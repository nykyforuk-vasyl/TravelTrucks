import Icon from "../../ui/Icon";
import { vehicleFeatures } from "../../data/vehicleFeatures";

const VehicleEquipment = () => {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {vehicleFeatures.map((feature) => {
        const isException = [
          "hugeicons_gas-stove",
          "lucide_microwave",
          "ion_water-outline",
        ].includes(feature.icon);

        return (
          <button
            key={feature.text}
            type="button"
            className="flex h-24 w-28 flex-col items-center justify-center gap-2 rounded-[12px] border text-black focus:border-red"
          >
            <Icon
              id={feature.icon}
              w={32}
              h={32}
              className={`fill-black ${isException ? "fill-white stroke-black" : "fill-black"}`}
            />
            {feature.text}
          </button>
        );
      })}
    </div>
  );
};

export default VehicleEquipment;
