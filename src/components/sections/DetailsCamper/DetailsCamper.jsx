import Icon from "../../../ui/Icon.jsx";
import CamperGallery from "../../CamperGallery/CamperGallery.jsx";

const DetailsCamper = ({ cardCamper }) => {
  const { name, gallery, price, rating, reviews, location, description } =
    cardCamper || {};

  return (
    <section>
      <h3 className="mb-6 text-xl text-black">{name}</h3>

      <div className="mb-4 flex items-center">
        <Icon id="star" w={18} h={18} className="mr-1 fill-yellow" />
        <p className="mr-4 text-base underline">
          {rating}({reviews?.[1]?.reviewer_rating || "No"} Reviews)
        </p>
        <Icon id="map" w={16} h={16} className="mr-1 fill-black" />
        <p className="mr-4 text-base">{location}</p>
      </div>

      <p className="mb-7 text-xl text-black">${price}.00</p>

      <CamperGallery images={gallery} />

      <p className="mb-[60px] text-darkGrey">{description}</p>
    </section>
  );
};

export default DetailsCamper;
