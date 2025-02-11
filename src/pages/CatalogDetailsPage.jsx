import HeaderSection from "../components/sections/Headers/HeaderSection.jsx";
import FeatureReviewNav from "../components/sections/FeatureReviewNav/FeatureReviewNav.jsx";
import DetailsCamper from "../components/sections/DetailsCamper/DetailsCamper.jsx";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const CatalogDetailsPage = () => {
  const location = useLocation();

  return (
    <div className="mb-20">
      <HeaderSection />
      <div className="mt-12">
        <DetailsCamper />
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
