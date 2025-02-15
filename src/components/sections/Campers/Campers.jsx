import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../../redux/operations.js";
import CamperCard from "../../CamperCard/CamperCard.jsx";
import {
  selectCampers,
  selectIsLoading,
  selectTotalCampers,
} from "../../../redux/campers/selectors.js";

const Campers = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const totalCampers = useSelector(selectTotalCampers);
  const isLoading = useSelector(selectIsLoading);

  const loadMore = () => {
    if (isLoading || campers.length >= totalCampers) return;
    const currentPage = Math.ceil(campers.length / 4) + 1;
    dispatch(fetchCampers({ page: currentPage, limit: 4 }));
  };

  return (
    <div className="mb-[52px] flex flex-col items-center">
      <ul className="mb-10 ml-16 flex flex-col gap-8">
        {campers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </ul>

      {!isLoading && campers.length < totalCampers && (
        <button
          onClick={loadMore}
          className="my-auto mb-[52px] mt-10 rounded-full border border-lightGrey bg-white px-[32px] py-4 text-base text-black transition-colors hover:border-darkRed active:border-darkRed"
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default Campers;
