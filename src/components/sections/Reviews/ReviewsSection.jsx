import { useParams } from "react-router-dom";
import CampervanBookingForm from "../../forms/CampervanBookingForm.jsx";
import CamperReviews from "../../CamperReviews/CamperReviews.jsx";

const ReviewsSection = () => {
  const { id } = useParams();

  return (
    <section>
      <div className="flex gap-10">
        <CamperReviews camperId={id} />
        <CampervanBookingForm />
      </div>
    </section>
  );
};

export default ReviewsSection;
