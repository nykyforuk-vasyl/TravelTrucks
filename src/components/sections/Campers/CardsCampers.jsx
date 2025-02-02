import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectIsLoading,
  selectIsError,
} from "../../../redux/campers/selectors.js";
import { useEffect } from "react";
import { fetchCampers } from "../../../redux/campers/operations.js";
import CamperCard from "../../CamperCard/CamperCard.jsx";
import ModalLoader from "../../ModalLoader/ModalLoader.jsx";

const CardsCampers = () => {
  const dispatch = useDispatch();
  const cardCampers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (isLoading) {
    return <ModalLoader text={"Loading..."} />;
  }

  if (error) {
    return <ModalLoader text={error} />;
  }

  if (!cardCampers || cardCampers.length === 0) {
    return <ModalLoader text={"No vans available"} />;
  }

  return (
    <div>
      <ul className="mb-10 ml-16 flex flex-col gap-8">
        {cardCampers.map((campers) => (
          <CamperCard key={campers.id} {...campers} />
        ))}
      </ul>
    </div>
  );
};

export default CardsCampers;
