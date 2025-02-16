import Icon from "../../ui/Icon";

const VehicleFeatures = ({ features }) => {
  return (
    <div className="mb-8 flex w-full flex-wrap gap-3">
      {features.map((feature) => {
        if (feature.value) {
          const isException = [
            "hugeicons_gas-stove",
            "lucide_microwave",
            "ion_water-outline",
          ].includes(feature.icon);

          return (
            <li
              key={feature.text}
              className="flex items-center gap-2 rounded-full bg-[#eeeeee] px-[12px] py-[6px] text-sm font-semibold text-black md:px-[18px] md:py-3 md:text-base"
            >
              <Icon
                id={feature.icon}
                w={20}
                h={20}
                className={`fill-black ${isException ? "fill-silver stroke-black" : ""}`}
              />
              {feature.text}
            </li>
          );
        }
        return null;
      })}
    </div>
  );
};

export default VehicleFeatures;
