import Icon from "../../ui/Icon";
import { useNavigate, useLocation } from "react-router-dom";

const CamperDetailsCard = ({
  name,
  gallery,
  price,
  rating,
  reviews,
  location,
  description,
}) => {
  const navigate = useNavigate();
  const locationS = useLocation();

  const handleGoBack = () => {
    if (locationS.pathname.startsWith("/catalog/")) {
      navigate("/catalog");
    } else {
      navigate(-1);
    }
  };

  return (
    <div>
      <button
        onClick={handleGoBack}
        className="mb-6 inline-block rounded-full bg-red px-[26px] py-[6px] text-base text-white transition-colors hover:bg-darkRed active:bg-darkRed"
      >
        Go Back
      </button>

      <h3 className="text-xl text-black">{name}</h3>

      <div className="mb-4 flex items-center">
        <Icon id="star" w={18} h={18} className="mr-1 fill-yellow" />
        <p className="mr-4 text-base font-normal underline">
          {rating}({reviews?.[1]?.reviewer_rating || "No"} Reviews)
        </p>
        <Icon id="map" w={16} h={16} className="mr-1 fill-black" />
        <p className="mr-4 text-base font-normal">{location}</p>
      </div>

      <p className="mb-7 text-xl text-black">${price}.00</p>

      <div className="mb-7 flex gap-12">
        {gallery?.slice(0, 3).map((image, index) => (
          <img
            key={index}
            src={image.original || "default-Picture.jpg"}
            alt={`Image ${index + 1}`}
            className="h-[312px] w-[292px] rounded-[10px] object-cover"
          />
        ))}
      </div>

      <p className="mb-[60px] font-normal text-darkGrey">{description}</p>
    </div>
  );
};

export default CamperDetailsCard;
