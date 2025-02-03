import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectByIdCamper,
  selectIsLoading,
  selectIsError,
} from "../../redux/campers/selectors.js";
import { useEffect } from "react";
import { fetchCampersById } from "../../redux/campers/operations.js";
import VehicleFeatures from "../../components/VehicleFeatures/VehicleFeatures.jsx";
import CamperFeatures from "./CamperFeatures.jsx";
import ModalLoader from "../../components/ModalLoader/ModalLoader.jsx";

const FeatureDetails = () => {
  const { id } = useParams();
  const cardIdCamper = useSelector(selectByIdCamper);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  useEffect(() => {
    if (!cardIdCamper || Object.keys(cardIdCamper).length === 0) {
      dispatch(fetchCampersById(id));
    }
  }, [dispatch, id, cardIdCamper]);

  if (isLoading) {
    return <ModalLoader text={"Loaders..."} />;
  }

  if (error) {
    return <ModalLoader text={error} />;
  }

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
  } = cardIdCamper;

  return (
    <div className="flex-1 rounded-[10px] bg-darkWhite p-[52px] pt-11">
      <ul className="mb-[100px] flex flex-wrap">
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
            { text: "Microwave", icon: "lucide_microwave", value: microwave },
          ]}
        />
      </ul>

      <CamperFeatures cardIdCamper={cardIdCamper} />
    </div>
  );
};

export default FeatureDetails;
