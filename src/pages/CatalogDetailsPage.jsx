import HeaderSection from "../components/sections/Headers/HeaderSection.jsx";
// import FeatureReviewNav from "../components/sections/FeatureReviewNav/FeatureReviewNav.jsx";
import DetailsCamper from "../components/sections/DetailsCamper/DetailsCamper.jsx";

const CatalogDetailsPage = () => {
  return (
    <div>
      <HeaderSection />
      <div className="mb-20 mt-12 flex flex-col gap-[60px]">
        {/* <FeatureReviewNav /> */}
        <DetailsCamper />
      </div>
    </div>
  );
};

export default CatalogDetailsPage;
