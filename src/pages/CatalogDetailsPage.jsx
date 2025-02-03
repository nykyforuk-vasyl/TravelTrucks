import HeaderSection from "../components/sections/Headers/HeaderSection.jsx";
import FeatureReviewNav from "../components/sections/FeatureReviewNav/FeatureReviewNav.jsx";
import DetailsCamper from "../components/sections/DetailsCamper/DetailsCamper.jsx";
import { Outlet } from "react-router-dom";

const CatalogDetailsPage = () => {
  return (
    <div className="mb-20">
      <HeaderSection />
      <div className="mt-12">
        <DetailsCamper />
      </div>
      <div className="px-[64px]">
        <FeatureReviewNav />
        <Outlet />
      </div>
    </div>
  );
};

export default CatalogDetailsPage;
