import { useForm } from "react-hook-form";
import VehicleEquipment from "../../SidebarComponent/VehicleEquipment";
import VehicleType from "../../SidebarComponent/VehicleType";
import SidebarLocation from "../../SidebarComponent/SidebarLocation";
import s from "./SidebarSection.module.css";

const SidebarSection = () => {
  const { control, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <aside
      className={`${s.customScrollbar} ml-16 w-[390px] border-t px-[2px] pt-2`}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="mb-2 block text-darkGrey">Location</label>

        <SidebarLocation control={control} />

        {/* Фільтр за особливостями */}
        <label className="mb-8 mt-4 block text-darkGrey">Filters</label>

        <h3 className="mb-2 mt-4 block text-custom text-black">
          Vehicle Equipment
        </h3>
        <div className="my-6 h-px w-full bg-gray-300"></div>

        <VehicleEquipment />

        {/* <div className="grid grid-cols-3 gap-2">
          {vehicleFeatures.map((feature) => (
            <button
              key={feature}
              type="button"
              className={`rounded-lg border px-4 py-2 ${
                filters.vehicleFeatures.includes(feature)
                  ? "border-red-500 text-red-500"
                  : "border-gray-300"
              }`}
              onClick={() => dispatch(toggleFeature(feature))}
            >
              {feature}
            </button>
          ))}
        </div> */}

        <h3 className="mb-2 mt-4 block text-custom text-black">Vehicle Type</h3>
        <div className="my-6 h-px w-full bg-gray-300"></div>

        <VehicleType />

        {/* <div className="grid grid-cols-3 gap-2">
          {vehicleTypes.map((type) => (
            <button
              key={type}
              type="button"
              className={`rounded-lg border px-4 py-2 ${
                filters.vehicleType.includes(type)
                  ? "border-red-500 text-red-500"
                  : "border-gray-300"
              }`}
              onClick={() => dispatch(toggleVehicleType(type))}
            >
              {type}
            </button>
          ))}
        </div> */}

        {/* Кнопка пошуку */}
        <button
          type="submit"
          className="mb-16 rounded-full bg-red px-[56px] py-4 text-base text-white transition-colors hover:bg-darkRed active:bg-darkRed"
        >
          Search
        </button>
      </form>
    </aside>
  );
};

export default SidebarSection;
