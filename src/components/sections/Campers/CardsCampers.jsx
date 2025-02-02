import { useDispatch, useSelector } from "react-redux";
import { selectTracks } from "../../../redux/campers/selectors.js";
import { useEffect } from "react";
import { fetchCampers } from "../../../redux/campers/operations.js";
import CamperCard from "../../CamperCard/CamperCard.jsx";

const CardsCampers = () => {
  const cardCampers = useSelector(selectTracks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cardCampers.length === 0) {
      dispatch(fetchCampers());
    }
  }, [dispatch, cardCampers.length]);

  return (
    <div>
      <ul className="mb-10 ml-16 flex flex-col gap-8">
        {cardCampers.map((campers) => (
          <CamperCard key={campers.id} {...campers} /> // Передаємо всі властивості фургона
        ))}
      </ul>
    </div>
  );
};

export default CardsCampers;
