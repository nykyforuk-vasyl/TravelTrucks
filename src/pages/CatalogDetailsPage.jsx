import HeaderSection from "../components/sections/Headers/HeaderSection.jsx";
import FeatureReviewNav from "../components/sections/FeatureReviewNav/FeatureReviewNav.jsx";
import DetailsCamper from "../components/sections/DetailsCamper/DetailsCamper.jsx";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton.jsx";
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
    dispatch(fetchCampersById(id));
  }, [dispatch, id]);

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
    <>
      <HeaderSection />
      <main className="mb-20 mt-12 flex flex-col px-4 md:px-[64px]">
        <DetailsCamper cardCamper={cardIdCamper} />
        <FeatureReviewNav />

        {location.pathname.match(/^\/catalog\/[^/]+$/) && (
          <Navigate to="features" replace />
        )}
        <Outlet />
        <ScrollToTopButton />
      </main>
    </>
  );
};

export default CatalogDetailsPage;
