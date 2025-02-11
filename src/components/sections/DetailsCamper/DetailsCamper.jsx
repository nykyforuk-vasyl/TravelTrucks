import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectByIdCamper,
  selectIsLoading,
  selectIsError,
} from "../../../redux/campers/selectors.js";
import { useEffect } from "react";
import { fetchCampersById } from "../../../redux/campers/operations.js";
import CamperDetailsCard from "../../CamperDetailsCard/CamperDetailsCard.jsx";
import ModalLoader from "../../ModalLoader/ModalLoader.jsx";

const DetailsCamper = () => {
  const { id } = useParams();
  const cardIdCamper = useSelector(selectByIdCamper);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchCampersById(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <ModalLoader text={"Loading..."} />;
  }

  if (error) {
    return <ModalLoader text={error} />;
  }

  if (cardIdCamper.length === 0) {
    return <ModalLoader text={"No vans available"} />;
  }

  return (
    <div className="px-[64px]">
      <div>
        <CamperDetailsCard {...cardIdCamper} />
      </div>
    </div>
  );
};

export default DetailsCamper;
