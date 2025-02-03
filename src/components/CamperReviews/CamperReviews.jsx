import { useDispatch, useSelector } from "react-redux";
import {
  selectByIdCamper,
  selectIsLoading,
  selectIsError,
} from "../../redux/campers/selectors.js";
import { useEffect } from "react";
import { fetchCampersById } from "../../redux/campers/operations.js";
import ModalLoader from "../../components/ModalLoader/ModalLoader.jsx";
import Icon from "../../ui/Icon";

const CamperReviews = ({ camperId }) => {
  const cardIdCamper = useSelector(selectByIdCamper);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  useEffect(() => {
    if (!cardIdCamper || Object.keys(cardIdCamper).length === 0) {
      dispatch(fetchCampersById(camperId));
    }
  }, [dispatch, camperId, cardIdCamper]);

  if (isLoading) {
    return <ModalLoader text={"Loaders..."} />;
  }

  if (error) {
    return <ModalLoader text={error} />;
  }

  const { reviews } = cardIdCamper;

  return (
    <div className="flex-1">
      <ul className="flex flex-col gap-11">
        {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
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
                  {Array.from({ length: reviewer_rating }).map((_, index) => (
                    <li key={index}>
                      <Icon id="star" w={16} h={15} className="fill-yellow" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-base font-normal text-grey">{comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperReviews;
