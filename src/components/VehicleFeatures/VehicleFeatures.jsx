import Icon from "../../ui/Icon";

const VehicleFeatures = ({ features }) => {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {features.map((feature) => {
        if (feature.value) {
          // Перевіряємо, чи значення властивості true
          const isException = [
            "hugeicons_gas-stove",
            "lucide_microwave",
            "ion_water-outline",
          ].includes(feature.icon);

          return (
            <div
              key={feature.text}
              className="flex items-center gap-2 rounded-full bg-silver px-[18px] py-3 text-base text-black"
            >
              <Icon
                id={feature.icon}
                w={20}
                h={20}
                className={`fill-black ${isException ? "fill-white stroke-black" : "fill-black"}`}
              />
              {feature.text}
            </div>
          );
        }
        return null; // Не відображати, якщо значення false
      })}
    </div>
  );
};

export default VehicleFeatures;
