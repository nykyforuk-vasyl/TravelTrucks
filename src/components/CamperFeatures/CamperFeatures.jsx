import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectByIdCamper,
  selectIsLoading,
  selectError,
} from "../../redux/campers/selectors.js";
import { useEffect } from "react";
import { fetchCampersById } from "../../redux/operations.js";
import VehicleFeatures from "../VehicleFeatures/VehicleFeatures.jsx";
import VehicleDetails from "./VehicleDetails.jsx";
import ClipLoader from "react-spinners/ClipLoader";
import ModalError from "../ModalError/ModalError.jsx";

const CamperFeatures = () => {
  const { id } = useParams();
  const cardIdCamper = useSelector(selectByIdCamper);
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!cardIdCamper || Object.keys(cardIdCamper).length === 0) {
      dispatch(fetchCampersById(id));
    }
  }, [dispatch, id, cardIdCamper]);

  const {
    AC,
    gas,
    kitchen,
    TV,
    bathroom,
    water,
    radio,
    refrigerator,
    microwave,
  } = cardIdCamper || {};

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <ClipLoader color="#e44848" size={70} />
      </div>
    );
  }

  if (error) {
    return (
      <ModalError
        text={error}
        onClose={() => dispatch({ type: "CLEAR_ERROR" })}
      />
    );
  }

  return (
    <div className="m-w-108 flex-1 rounded-[10px] bg-darkWhite p-6 py-8 md:p-[52px] md:py-11">
      <div className="mb-3 flex flex-wrap md:mb-[90px]">
        <VehicleFeatures
          features={[
            { text: "AC", icon: "wind", value: AC },
            { text: "Gas", icon: "hugeicons_gas-stove", value: gas },
            { text: "Kitchen", icon: "cup-hot", value: kitchen },
            { text: "TV", icon: "tv", value: TV },
            { text: "Bathroom", icon: "ph_shower", value: bathroom },
            { text: "Water", icon: "ion_water-outline", value: water },
            { text: "Radio", icon: "ui-radios", value: radio },
            {
              text: "Refrigerator",
              icon: "solar_fridge-outline",
              value: refrigerator,
            },
            {
              text: "Microwave",
              icon: "lucide_microwave",
              value: microwave,
            },
          ]}
        />
      </div>

      <VehicleDetails cardIdCamper={cardIdCamper} />
    </div>
  );
};

export default CamperFeatures;
