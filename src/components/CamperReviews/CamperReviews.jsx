import { useDispatch, useSelector } from "react-redux";
import {
  selectByIdCamper,
  selectIsLoading,
  selectError,
} from "../../redux/campers/selectors.js";
import { useEffect } from "react";
import { fetchCampersById } from "../../redux/operations.js";
import ModalLoader from "../../components/ModalLoader/ModalLoader.jsx";
import ModalError from "../../components/ModalError/ModalError.jsx";
import Icon from "../../ui/Icon";

const CamperReviews = ({ camperId }) => {
  const cardIdCamper = useSelector(selectByIdCamper);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (!cardIdCamper || Object.keys(cardIdCamper).length === 0) {
      dispatch(fetchCampersById(camperId));
    }
  }, [dispatch, camperId, cardIdCamper]);

  if (isLoading) {
    return <ModalLoader text={"Loading camper reviews..."} />;
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
    <ul className="m-w-108 flex flex-1 flex-col gap-11">
      {cardIdCamper.reviews.map(
        ({ reviewer_name, reviewer_rating, comment }, index) => (
          <li key={index}>
            <div className="mb-4 flex gap-4">
              <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-silver text-xl text-red">
                {reviewer_name.charAt(0).toUpperCase()}
              </span>

              <div className="flex flex-col gap-[2px]">
                <p className="font-medium">
                  <strong>{reviewer_name}</strong> ({reviewer_rating}★)
                </p>

                <ul className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <li key={index}>
                      <Icon
                        id="star"
                        w={16}
                        h={15}
                        className={
                          index < reviewer_rating
                            ? "fill-yellow"
                            : "fill-silver"
                        }
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-base font-normal text-grey">{comment}</p>
          </li>
        ),
      )}
    </ul>
  );
};

export default CamperReviews;
