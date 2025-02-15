import Icon from "../../../ui/Icon.jsx";

const DetailsCamper = ({ cardCamper }) => {
  const { name, gallery, price, rating, reviews, location, description } =
    cardCamper || {};

  return (
    <section>
      <h3 className="mb-6 text-xl text-black">{name}</h3>

      <div className="mb-4 flex items-center">
        <Icon id="star" w={18} h={18} className="mr-1 fill-yellow" />
        <p className="mr-4 text-base font-normal underline">
          {rating}({reviews?.[1]?.reviewer_rating || "No"} Reviews)
        </p>
        <Icon id="map" w={16} h={16} className="mr-1 fill-black" />
        <p className="mr-4 text-base font-normal">{location}</p>
      </div>

      <p className="mb-7 text-xl text-black">${price}.00</p>

      <div className="mb-7 flex flex-wrap gap-12">
        {gallery?.slice(0, 3).map((image, index) => (
          <img
            key={index}
            src={image.original || "default-Picture.jpg"}
            alt={`Image ${index + 1}`}
            className="h-[312px] w-[292px] rounded-[10px] object-cover"
            loading="lazy"
          />
        ))}
      </div>

      <p className="mb-[60px] font-normal text-darkGrey">{description}</p>
    </section>
  );
};

export default DetailsCamper;
