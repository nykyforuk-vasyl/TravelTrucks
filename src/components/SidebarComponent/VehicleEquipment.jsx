import Icon from "../../ui/Icon";

const vehicleFeatures = [
  { id: 1, text: "AC", icon: "wind" },
  { id: 2, text: "Automatic", icon: "diagram" },
  { id: 3, text: "Kitchen", icon: "cup-hot" },
  { id: 4, text: "TV", icon: "tv" },
  { id: 5, text: "Bathroom", icon: "ph_shower" },
];

const VehicleEquipment = () => {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {vehicleFeatures.map((feature) => (
        <button
          key={feature.id}
          type="button"
          className="flex h-24 w-28 flex-col items-center justify-center gap-2 rounded-[12px] border text-black"
        >
          <Icon id={feature.icon} w={32} h={32} className="fill-black" />
          {feature.text}
        </button>
      ))}
    </div>
  );
};

export default VehicleEquipment;
