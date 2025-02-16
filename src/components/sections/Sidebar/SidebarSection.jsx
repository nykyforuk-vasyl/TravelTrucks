import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import s from "./SidebarSection.module.css";

import { setFilters } from "../../../redux/filters/slice";
import { resetCampers } from "../../../redux/campers/slice";
import { fetchCampers } from "../../../redux/operations";
import { selectFilters } from "../../../redux/filters/selectors";

import VehicleEquipment from "../../SidebarComponent/VehicleEquipment";
import VehicleType from "../../SidebarComponent/VehicleType";
import EngineType from "../../SidebarComponent/EngineType";
import SidebarLocation from "../../SidebarComponent/SidebarLocation";

const SidebarSection = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const [tempFilters, setTempFilters] = useState(filters);

  const handleApplyFilters = () => {
    dispatch(setFilters(tempFilters));
    dispatch(resetCampers());
    dispatch(fetchCampers({ ...tempFilters, page: 1, limit: 4 }));
  };

  return (
    <div
      className={`${s.sidebarModal} ${isOpen ? s.open : ""}`}
      onClick={onClose}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`${s.sidebarContent} ${s.customScrollbar} mb-12 w-[320px] border-y px-[2px] pt-2 md:w-[386px]`}
      >
        <button className={`${s.closeBtn} mb-4 rounded-full`} onClick={onClose}>
          ✖
        </button>
        <SidebarLocation
          tempFilters={tempFilters}
          setTempFilters={setTempFilters}
        />

        <div className="mb-8 mt-4 block text-darkGrey">Filters</div>

        <VehicleEquipment
          tempFilters={tempFilters}
          setTempFilters={setTempFilters}
        />

        <EngineType tempFilters={tempFilters} setTempFilters={setTempFilters} />

        <VehicleType
          tempFilters={tempFilters}
          setTempFilters={setTempFilters}
        />

        <div className="flex w-full justify-center">
          <button
            onClick={handleApplyFilters}
            type="button"
            className="mb-16 rounded-full bg-red px-[56px] py-4 text-base text-white transition-all hover:bg-darkRed active:bg-darkRed"
          >
            Search
          </button>
        </div>
      </aside>
    </div>
  );
};

export default SidebarSection;
