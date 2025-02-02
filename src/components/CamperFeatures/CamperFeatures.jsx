import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectByIdCamper,
  selectIsLoading,
  selectIsError,
} from "../../redux/campers/selectors.js";
import { useEffect } from "react";
import { fetchCampersById } from "../../redux/campers/operations.js";
import ModalLoader from "../../components/ModalLoader/ModalLoader.jsx";

const CamperFeatures = () => {
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

  const { form, length, width, height, tank, consumption } = cardIdCamper;

  return (
    <div>
      <h2 className="text-custom">Vehicle details</h2>
      <div className="my-4 h-px w-full bg-gray-300"></div>

      <ul className="font-semibold">
        <li className="flex justify-between">
          <span className="">Form:</span> <span>{form}</span>
        </li>
        <li className="flex justify-between">
          <span className="">Length:</span> <span>{length}</span>
        </li>
        <li className="flex justify-between">
          <span className="">Width:</span> <span>{width}</span>
        </li>
        <li className="flex justify-between">
          <span className="">Height:</span> <span>{height}</span>
        </li>
        <li className="flex justify-between">
          <span className="">Tank:</span> <span>{tank}</span>
        </li>
        <li className="flex justify-between">
          <span className="">Consumption:</span> <span>{consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default CamperFeatures;
