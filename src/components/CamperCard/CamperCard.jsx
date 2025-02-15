import Icon from "../../ui/Icon";
import VehicleFeatures from "../VehicleFeatures/VehicleFeatures";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice";
import { selectFavorites } from "../../redux/favorites/selectors";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites) || [];

  const {
    id,
    name,
    gallery,
    price,
    rating,
    reviews,
    location,
    description,
    AC,
    gas,
    kitchen,
    TV,
    bathroom,
    water,
    radio,
    refrigerator,
    microwave,
  } = camper;

  const isFavorited = favorites.includes(id);

  const handleFavoriteToggle = () => {
    if (isFavorited) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <li
      key={id}
      className="flex w-[888px] gap-6 rounded-[20px] border border-lightGrey p-6"
    >
      <img
        src={gallery?.[0]?.thumb || "default-Picture.jpg"}
        alt={name}
        className="h-[320px] w-[292px] rounded-[10px] object-cover"
        loading="lazy"
      />

      <div className="mb-2 w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-xl text-black">{name}</h3>
          <div className="flex gap-3">
            <p className="text-xl text-black">&euro;{price.toFixed(2)}</p>
            <button type="button" onClick={handleFavoriteToggle}>
              <Icon
                id="heart"
                w={26}
                h={24}
                className={`transition-colors ${isFavorited ? "fill-red" : "fill-black"}`}
              />
            </button>
          </div>
        </div>

        <div className="mb-6 flex items-center">
          <Icon id="star" w={18} h={18} className="mr-1 fill-yellow" />
          <p className="mr-4 text-base font-normal underline">
            {rating}({reviews?.length || 0}Reviews)
          </p>
          <Icon id="map" w={16} h={15} className="mr-1 fill-black" />
          <p className="mr-4 text-base font-normal">{location}</p>
        </div>

        <p className="mb-6 w-[525px] truncate text-base font-normal text-darkGrey">
          {description}
        </p>
        <ul>
          <VehicleFeatures
            features={[
              { text: "AC", icon: "wind", value: AC },
              { text: "Gas", icon: "hugeicons_gas-stove", value: gas },
              { text: "Kitchen", icon: "cup-hot", value: kitchen },
              { text: "TV", icon: "tv", value: TV },
              { text: "Bathroom", icon: "ph_shower", value: bathroom },
              { text: "Water", icon: "ion_water-outline", value: water },
              { text: "Radio", icon: "ui-radios", value: radio },
              {
                text: "Refrigerator",
                icon: "solar_fridge-outline",
                value: refrigerator,
              },
              { text: "Microwave", icon: "lucide_microwave", value: microwave },
            ]}
          />
        </ul>

        <Link
          to={`/catalog/${id}`}
          className="rounded-full bg-red px-10 py-4 text-base text-white transition-colors hover:bg-darkRed active:bg-darkRed"
        >
          Show more
        </Link>
      </div>
    </li>
  );
};

export default CamperCard;
