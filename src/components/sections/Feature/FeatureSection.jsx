import CampervanForm from "../CampervanForm/CampervanForm.jsx";
import CamperFeatures from "../../CamperFeatures/CamperFeatures.jsx";

const FeatureSection = () => {
  return (
    <section className="min-w-108 flex flex-wrap gap-10 md:flex-nowrap">
      <CamperFeatures />
      <CampervanForm />
    </section>
  );
};

export default FeatureSection;
