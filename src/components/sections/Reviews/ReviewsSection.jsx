import { useParams } from "react-router-dom";
import CampervanForm from "../CampervanForm/CampervanForm.jsx";
import CamperReviews from "../../CamperReviews/CamperReviews.jsx";

const ReviewsSection = () => {
  const { id } = useParams();

  return (
    <section className="flex flex-wrap gap-10 md:flex-nowrap">
      <CamperReviews camperId={id} />
      <CampervanForm />
    </section>
  );
};

export default ReviewsSection;
