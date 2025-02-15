import CampervanBookingForm from "../../forms/CampervanBookingForm.jsx";
import CamperFeatures from "../../CamperFeatures/CamperFeatures.jsx";

const FeatureSection = () => {
  return (
    <section className="flex gap-10">
      <CamperFeatures />
      <CampervanBookingForm />
    </section>
  );
};

export default FeatureSection;
