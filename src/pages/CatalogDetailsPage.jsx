import HeaderSection from "../components/sections/Headers/HeaderSection.jsx";
import FeatureReviewNav from "../components/sections/FeatureReviewNav/FeatureReviewNav.jsx";
import DetailsCamper from "../components/sections/DetailsCamper/DetailsCamper.jsx";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectByIdCamper,
  selectIsLoading,
  selectError,
} from "../redux/campers/selectors.js";
import { fetchCampersById } from "../redux/operations.js";

import ModalLoader from "../components/ModalLoader/ModalLoader.jsx";
import ModalError from "../components/ModalError/ModalError.jsx";

const CatalogDetailsPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();
  const cardIdCamper = useSelector(selectByIdCamper);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (!cardIdCamper && !isLoading) {
      dispatch(fetchCampersById(id));
    }
  }, [dispatch, id, cardIdCamper, isLoading]);

  if (isLoading) {
    return <ModalLoader text={"Loading camper details..."} />;
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
    <div className="mb-20">
      <HeaderSection />
      <div className="mt-12">
        <DetailsCamper idCamper={location} cardCamper={cardIdCamper} />
      </div>
      <div className="px-[64px]">
        <FeatureReviewNav />

        {location.pathname.match(/^\/catalog\/[^/]+$/) && (
          <Navigate to="features" replace />
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default CatalogDetailsPage;
