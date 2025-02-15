import CampervanForm from "../../CampervanForm/CampervanForm.jsx";
import CamperFeatures from "../../CamperFeatures/CamperFeatures.jsx";

const FeatureSection = () => {
  return (
    <section className="flex flex-wrap gap-10 md:flex-nowrap">
      <CamperFeatures />
      <CampervanForm />
    </section>
  );
};

export default FeatureSection;
