import { useDispatch, useSelector } from "react-redux";
import {
  selectByIdCamper,
  selectIsLoading,
  selectIsError,
} from "../../redux/campers/selectors.js";
import { useEffect } from "react";
import { fetchCampersById } from "../../redux/campers/operations.js";
import ModalLoader from "../../components/ModalLoader/ModalLoader.jsx";

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
    <div className="flex-1 bg-darkWhite pt-11">
      <ul>
        {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
          <li key={index}>
            <p>
              <strong>{reviewer_name}</strong> ({reviewer_rating}★)
            </p>
            <p>{comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperReviews;
