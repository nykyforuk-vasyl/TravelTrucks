import Icon from "../../ui/Icon";

const vehicleTypes = [
  { id: 1, text: "Van", icon: "bi_grid-1x22x" },
  { id: 2, text: "Fully Integrated", icon: "bi_grid" },
  { id: 3, text: "Alcove", icon: "bi_grid-3x3-gap" },
];

const VehicleType = () => {
  return (
    <div>
      {/* Фільтр за типом транспорту */}
      <div className="mb-10 flex flex-wrap gap-3">
        {vehicleTypes.map((type) => (
          <button
            key={type.id}
            type="button"
            className="flex h-24 w-28 flex-col items-center justify-center gap-2 rounded-[12px] border text-black"
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
