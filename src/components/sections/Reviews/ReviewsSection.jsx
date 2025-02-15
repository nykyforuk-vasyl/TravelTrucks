import { useParams } from "react-router-dom";
import CampervanBookingForm from "../../forms/CampervanBookingForm.jsx";
import CamperReviews from "../../CamperReviews/CamperReviews.jsx";

const ReviewsSection = () => {
  const { id } = useParams();

  return (
    <section className="flex gap-10">
      <CamperReviews camperId={id} />
      <CampervanBookingForm />
    </section>
  );
};

export default ReviewsSection;
