import CampervanBookingForm from "../../forms/CampervanBookingForm.jsx";
import FeatureDetails from "../../CamperFeatures/FeatureDetails.jsx";

const FeatureSection = () => {
  return (
    <section>
      <div className="flex gap-10">
        <FeatureDetails />
        <CampervanBookingForm />
      </div>
    </section>
  );
};

export default FeatureSection;
